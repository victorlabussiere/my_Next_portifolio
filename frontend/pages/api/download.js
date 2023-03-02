import * as path from 'path-browserify'
import * as fs from 'fs'

export default function handler(req, res) {
    const file = path.join(__dirname, '../static', 'curriculo.pdf')
    const filePath = file
    const fileStream = fs.createReadStream(filePath)

    res.setHeader('Content-Disposition', 'attachment; filename="curriculo.pdf"');
    res.setHeader('Content-Type', 'application/pdf');

    fileStream.pipe(res);

    res.on('finish', () => {
        res.end();
    });
}