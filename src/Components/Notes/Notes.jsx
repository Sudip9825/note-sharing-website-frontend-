import React, { useState } from 'react';
import './Notes.css';

const Notes = ({ onClose }) => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [fileType, setFileType] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(null);

    // Basic validation
    if (!subject || !description || !fileType || !selectedFile) {
      setError('Please fill in all fields and select a file.');
      setLoading(false);
      return;
    }

    /*
    // Backend processing section (commented out)
    const formData = new FormData();
    formData.append('subject', subject);
    formData.append('description', description);
    formData.append('fileType', fileType);
    formData.append('notesFile', selectedFile); // 'notesFile' is the field name your backend expects for the file

    try {
      const response = await fetch('/api/upload-notes', { // Replace with your actual backend endpoint
        method: 'POST',
        body: formData,
        // When sending FormData, do NOT set 'Content-Type': 'application/json'
        // The browser will automatically set 'Content-Type': 'multipart/form-data' with the correct boundary
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to upload notes');
      }

      const data = await response.json();
      setMessage(data.message || 'Notes uploaded successfully!');
      console.log('Upload successful:', data);

      // Clear form fields after successful submission
      setSubject('');
      setDescription('');
      setFileType('');
      setSelectedFile(null);

    } catch (err) {
      setError(err.message);
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
    */

    // Simulated backend processing (active)
    console.log({
      subject,
      description,
      fileType,
      fileName: selectedFile.name,
      fileSize: selectedFile.size,
      fileType: selectedFile.type,
    });

    setTimeout(() => {
      setMessage('Notes uploaded successfully!');
      setLoading(false);
      // Clear form fields after successful submission
      setSubject('');
      setDescription('');
      setFileType('');
      setSelectedFile(null);
    }, 1500);
  };

  return (
    <div className="modal-overlay">
      <div className="notes-container">
        <div className="header">
          <div className="text">Upload Notes</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit} className="notes-form">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="e.g., Mathematics, Physics"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Briefly describe the notes..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="fileType">File Type</label>
            <select
              id="fileType"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              required
            >
              <option value="">Select File Type</option>
              <option value="img">Image (JPG, PNG)</option>
              <option value="pdf">PDF</option>
              <option value="doc">Document (DOC, DOCX)</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fileUpload">Upload File Here</label>
            <input
              type="file"
              id="fileUpload"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              required
            />
            {selectedFile && <p className="selected-file-info">Selected: {selectedFile.name}</p>}
          </div>

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}

          <div className="button-group">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Uploading...' : 'Upload Notes'}
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notes;
