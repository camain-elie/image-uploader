exports.postImage = (req, res, next) => {
    //const imageURL = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    //console.log(imageURL);
    console.log(req.file)
    res.send({ message: 'post image'});
};

exports.getImage = (req, res, next) => {
    res.send({ message: 'get image'});
};