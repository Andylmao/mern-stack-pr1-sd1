import React, { useState } from 'react';
import axios from 'axios';

const GptComponent = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const sendRequestToGPT = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      // Realizar la solicitud a la API de GPT
      const response = await axios.post('/api/gpt', {
        input: inputText,
        // Otros parámetros...
      });

      setOutputText(response.data.output);
    } catch (error) {
      console.error('Error al procesar la solicitud a la API de GPT', error);
      setError('Error al procesar la solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gpt-component">
      <h2>GPT Interaction</h2>
      <form onSubmit={sendRequestToGPT} autoComplete="off">
        <div className="row">
          <label htmlFor="gptInput">Input Text</label>
          <input
            type="text"
            id="gptInput"
            value={inputText}
            name="gptInput"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label htmlFor="gptOutput">Output Text</label>
          <textarea
            type="text"
            id="gptOutput"
            value={outputText}
            name="gptOutput"
            rows="10"
            readOnly
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Process with GPT'}
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default GptComponent;
