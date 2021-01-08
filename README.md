<div align="center">

# TEMPLATE TYPESCRIPT FOR SMALL PROJECTS :milky_way:

<img alt="longRoadAhead" src="https://thumbs.gfycat.com/CanineSameEwe-small.gif" />
<blockquote >"You have to be lost to find places that can't be found"</blockquote>
</br>
</div>

## Install :wrench:

* Clone the repo and run ``yarn`` or ``npm install``

* Highly  recommend the Visual Studio Code extension "ESLint", it will apply the standards of my code in the right way. *Sometimes, in the right bottom corn of your VSCode will have somethin like: <img alt="longRoadAhead" src="https://raw.githubusercontent.com/Microsoft/vscode-eslint/master/images/2_1_10/eslint-status.png" /> , if that's the case, just click on that icon and allow it.*

* Inside the `ormconfig.example.json` is the configuration for the database (using postgres and typeORM), rename or create a new `ormconfig.json` file to configure the database *(inside the ``./src/database`` you can find more about the database and its entities).*

* To create the **docker** container based on the `ormconfig.example.json` we can do: ``docker run --name templateDB -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres``. To access the database you can use [DBeaver](https://dbeaver.io/). Highly recommended.

## Usage

The plan is: you go, take the template and do your thing. In ten minutes you see that simple structure and start your simple project. This humble template is _NOT_ intended for large projects, you could start with it and than do some refactor to a design pattern down the road. But for small projects that we do to get some XP, it will be great.

<img alt="JinxedFixed" src="./git_assets/jinxfix.gif" />

## License

MIT License © Template for Typescript Projects
