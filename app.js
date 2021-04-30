    // import
    // const namaLibrary = require("SourceDependency")
    const express = require("express");
    // untuk make libary framework backend-nya
    const app = express();
    const port = 3000;
    const router = require("./routes")
    const cors = require("cors");    //cross origin resource sharing : b
    const bodyparser = require("body-parser")


    // using
    app.use(bodyparser.urlencoded({extended:"false"}));
    app.use(bodyparser.json());
    app.use(router);
    app.use(cors());
    app.use(express.urlencoded({ extended: "false"}));
    app.use(express.json());

    // get method
    app.get("/", (req, res) => {
        res.status(200).json({ status: "ok" });
    });

    app.get("/test", (req, res) => {
        res.status(200).json({ status: "ok" });
    });

    // run server
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    });