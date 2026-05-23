import { useState, useEffect } from "react";

interface LSLGroup {
  name: string;
  channels: number[];
}

interface Props {
  open: boolean;
  onClose: () => void;
  numChannels: number;
  onSave: (groups: LSLGroup[]) => void;
  initialGroups?: LSLGroup[];
}

export default function LSLGroupModal({
  open,
  onClose,
  numChannels,
  onSave,
  initialGroups = [],
}: Props) {
  const [groups, setGroups] = useState<LSLGroup[]>(initialGroups);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setGroups(initialGroups);
  }, [initialGroups]);

  if (!open) return null;

  const addGroup = () => {
    setGroups([...groups, { name: `Group${groups.length + 1}`, channels: [] }]);
    setError("");
  };

  const removeGroup = (index: number) => {
    setGroups(groups.filter((_, i) => i !== index));
    setError("");
  };

  const updateGroupName = (index: number, name: string) => {
    const newGroups = [...groups];
    newGroups[index] = { ...newGroups[index], name };
    setGroups(newGroups);
    setError("");
  };

  const toggleChannel = (groupIndex: number, channelIndex: number) => {
    const newGroups = [...groups];
    const group = newGroups[groupIndex];
    const channels = [...group.channels];

    const idx = channels.indexOf(channelIndex);
    if (idx >= 0) {
      channels.splice(idx, 1);
    } else {
      channels.push(channelIndex);
      channels.sort((a, b) => a - b);
    }

    newGroups[groupIndex] = { ...group, channels };
    setGroups(newGroups);
    setError("");
  };

  const validate = (): string | null => {
    // Check for empty groups
    for (const group of groups) {
      if (!group.name.trim()) {
        return "All groups must have a name";
      }
      if (group.channels.length === 0) {
        return `Group "${group.name}" has no channels selected`;
      }
    }

    // Check for overlapping channels
    const usedChannels = new Set<number>();
    for (const group of groups) {
      for (const ch of group.channels) {
        if (usedChannels.has(ch)) {
          return `Channel ${ch} is used in multiple groups`;
        }
        usedChannels.add(ch);
      }
    }

    return null;
  };

  const handleSave = () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    onSave(groups);
    onClose();
  };

  const handleCancel = () => {
    setGroups(initialGroups);
    setError("");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-content lsl-group-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Configure LSL Channel Groups</h2>
          <button className="btn-close" onClick={handleCancel}>×</button>
        </div>

        <div className="modal-body">
          <p className="help-text">
            Create separate LSL streams per signal type (e.g., EEG, EOG, EMG). 
            Each group becomes its own stream: <code>{`{GroupName}_PiEEG`}</code>.
            <br />
            <strong>No groups?</strong> LSL sends a single default stream <code>PiEEG</code> with all channels.
          </p>

          {error && <div className="error-message">{error}</div>}

          {groups.length === 0 && (
            <div className="empty-state">
              <p>
                No groups configured — LSL will use the default single stream with all channels.
                <br />
                Click "Add Group" below to split channels into separate streams.
              </p>
            </div>
          )}

          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="group-editor">
              <div className="group-header">
                <input
                  type="text"
                  className="group-name-input"
                  value={group.name}
                  onChange={(e) => updateGroupName(groupIndex, e.target.value)}
                  placeholder="Group name (e.g., EEG, EOG, EMG)"
                />
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeGroup(groupIndex)}
                  title="Remove group"
                >
                  Remove
                </button>
              </div>

              <div className="channel-grid">
                {Array.from({ length: numChannels }, (_, i) => i).map((ch) => {
                  const isSelected = group.channels.includes(ch);
                  const isUsedInOther = groups.some(
                    (g, idx) => idx !== groupIndex && g.channels.includes(ch)
                  );

                  return (
                    <label
                      key={ch}
                      className={`channel-checkbox ${isSelected ? "selected" : ""} ${
                        isUsedInOther ? "disabled" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        disabled={isUsedInOther}
                        onChange={() => toggleChannel(groupIndex, ch)}
                      />
                      <span>Ch{ch}</span>
                    </label>
                  );
                })}
              </div>

              {group.channels.length > 0 && (
                <div className="group-summary">
                  Selected: {group.channels.length} channel{group.channels.length !== 1 ? "s" : ""} 
                  ({group.channels.join(", ")})
                </div>
              )}
            </div>
          ))}

          <button className="btn btn-add-group" onClick={addGroup}>
            + Add Group
          </button>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSave}
            title={groups.length === 0 
              ? "Save (will use default single stream)" 
              : `Save ${groups.length} group${groups.length > 1 ? 's' : ''}`}
          >
            {groups.length === 0 ? "Use Default Stream" : "Save Groups"}
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .modal-content {
          background: #1a1a2e;
          border-radius: 12px;
          max-width: 700px;
          width: 90%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .lsl-group-modal .modal-header {
          padding: 20px;
          border-bottom: 1px solid #2a2a3e;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .lsl-group-modal .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #fff;
        }

        .lsl-group-modal .btn-close {
          background: none;
          border: none;
          color: #888;
          font-size: 2rem;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          line-height: 1;
        }

        .lsl-group-modal .btn-close:hover {
          color: #fff;
        }

        .lsl-group-modal .modal-body {
          padding: 20px;
          overflow-y: auto;
          flex: 1;
        }

        .lsl-group-modal .help-text {
          color: #aaa;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .lsl-group-modal .help-text code {
          background: #2a2a3e;
          padding: 2px 6px;
          border-radius: 3px;
          color: #4ade80;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .lsl-group-modal .help-text strong {
          color: #fff;
        }

        .lsl-group-modal .error-message {
          background: #ff4444;
          color: #fff;
          padding: 10px 15px;
          border-radius: 6px;
          margin-bottom: 15px;
        }

        .lsl-group-modal .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: #888;
          background: #16162a;
          border-radius: 8px;
          border: 2px dashed #2a2a3e;
          margin-bottom: 20px;
        }

        .lsl-group-modal .empty-state p {
          margin: 0;
          line-height: 1.6;
        }

        .lsl-group-modal .group-editor {
          background: #16162a;
          border: 1px solid #2a2a3e;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
        }

        .lsl-group-modal .group-header {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        .lsl-group-modal .group-name-input {
          flex: 1;
          padding: 8px 12px;
          background: #0f0f1e;
          border: 1px solid #2a2a3e;
          border-radius: 6px;
          color: #fff;
          font-size: 1rem;
        }

        .lsl-group-modal .group-name-input:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .lsl-group-modal .channel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
          gap: 8px;
          margin-bottom: 10px;
        }

        .lsl-group-modal .channel-checkbox {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          background: #0f0f1e;
          border: 1px solid #2a2a3e;
          border-radius: 6px;
          cursor: pointer;
          user-select: none;
          transition: all 0.2s;
        }

        .lsl-group-modal .channel-checkbox:hover {
          border-color: #4a9eff;
        }

        .lsl-group-modal .channel-checkbox.selected {
          background: #4a9eff;
          border-color: #4a9eff;
          color: #fff;
        }

        .lsl-group-modal .channel-checkbox.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .lsl-group-modal .channel-checkbox.disabled:hover {
          border-color: #2a2a3e;
        }

        .lsl-group-modal .channel-checkbox input {
          display: none;
        }

        .lsl-group-modal .group-summary {
          color: #888;
          font-size: 0.875rem;
          padding: 8px;
          background: #0f0f1e;
          border-radius: 4px;
        }

        .lsl-group-modal .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .lsl-group-modal .btn-sm {
          padding: 6px 12px;
          font-size: 0.875rem;
        }

        .lsl-group-modal .btn-danger {
          background: #ff4444;
          color: #fff;
        }

        .lsl-group-modal .btn-danger:hover {
          background: #cc0000;
        }

        .lsl-group-modal .btn-add-group {
          width: 100%;
          background: #2a2a3e;
          color: #fff;
          margin-top: 10px;
        }

        .lsl-group-modal .btn-add-group:hover {
          background: #3a3a4e;
        }

        .lsl-group-modal .modal-footer {
          padding: 20px;
          border-top: 1px solid #2a2a3e;
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }

        .lsl-group-modal .btn-secondary {
          background: #2a2a3e;
          color: #fff;
        }

        .lsl-group-modal .btn-secondary:hover {
          background: #3a3a4e;
        }

        .lsl-group-modal .btn-primary {
          background: #4a9eff;
          color: #fff;
        }

        .lsl-group-modal .btn-primary:hover {
          background: #3a8eef;
        }

        .lsl-group-modal .btn-primary:disabled {
          background: #2a2a3e;
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
