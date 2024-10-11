const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const externalApiUrl = 'https://echo-serv.tbxnet.com/v1/secret';
const apiKey = 'Bearer aSuperSecretKey';

app.get('/files/data', async (req, res) => {
  try {
    const fileListResponse = await axios.get(`${externalApiUrl}/files`, {
      headers: { authorization: apiKey }
    });
    const files = fileListResponse.data.files;

    const processedFiles = [];

    for (const file of files) {
      try {
        const fileDataResponse = await axios.get(`${externalApiUrl}/file/${file}`, {
          headers: { authorization: apiKey }
        });
        const lines = fileDataResponse.data.split('\n').slice(1);
        const validLines = lines.filter(line => line.split(',').length === 4);

        const formattedFile = {
          file,
          lines: validLines.map(line => {
            const [file, text, number, hex] = line.split(',');
            return { text, number: parseInt(number), hex };
          })
        };
        processedFiles.push(formattedFile);
      } catch (error) {
        console.error(`Error processing file ${file}:`, error.message);
        // Manejo de errores: Continuar con el siguiente archivo
      }
    }

    res.json(processedFiles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching files' });
  }
});


app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
