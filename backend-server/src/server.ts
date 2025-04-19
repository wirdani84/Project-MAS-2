import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Backend server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});