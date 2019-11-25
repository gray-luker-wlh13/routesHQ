const express = require('express'),
    gradient = require('gradient-string'),
    cc = require('./Controller/climbCtrl');

const app = express();
app.use(express.json());

//endpoints
app.get('/api/routes', cc.climbs);
app.post('/api/routes', cc.addClimb);
app.put('/api/routes/:id', cc.reGrade);
app.delete('/api/routes/:id', cc.sendClimb);
app.get('/api/route', cc.getClimbs);

const PORT = 4020;
app.listen(PORT, () => console.log(gradient.cristal(`Keeping it green on port ${PORT}`)));