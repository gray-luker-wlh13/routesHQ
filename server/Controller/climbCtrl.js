let myRoutes = [
    {
        id: 0,
        img: 'https://cdn-files.apstatic.com/climb/112512810_medium_1494309566_topo.jpg',
        name: 'Unknown',
        grade: 'V3'
    },
    {
        id: 1,
        img: 'https://cdn-files.apstatic.com/climb/109776027_medium_1494362196.jpg',
        name: 'Kung Fu',
        grade: 'V6'
    },
    {
        id: 2,
        img: 'https://cdn-files.apstatic.com/climb/109595717_medium_1494357610_topo.jpg',
        name: 'Surfboard Sit-Start',
        grade: 'V4'
    }
];

let id = 3;

module.exports = {
    climbs: (req, res) => {
        res.status(200).send(myRoutes);
    },

    addClimb: (req, res) => {
    //use req.body
         const routeObj = {
            id: id++,
            img: req.body.img,
            name: req.body.name,
            grade: req.body.grade
        }
    myRoutes.push(routeObj);
        res.status(200).send(myRoutes);
    },

    reGrade: (req, res) => {
    //use id params
        const {id} = req.params;
        const {newGrade} = req.body;
        const index = myRoutes.findIndex(e => e.id === +id)
        myRoutes[index].grade = newGrade;
        res.status(200).send(myRoutes);
    },

    sendClimb: (req, res) => {
    //use id params
        const {id} = req.params;
        const index = myRoutes.findIndex(e => e.id === +id)
        myRoutes.splice(index, 1);
        res.status(200).send(myRoutes);
    },

    getClimbs: (req, res) => {
        if(req.query.grade){
            let climbs = myRoutes.filter(val => val.grade <= req.query.grade)
            return res.status(200).send(climbs)
        }
        res.status(200).send(myRoutes);
    }
}