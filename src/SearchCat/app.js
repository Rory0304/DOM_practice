import InputView from "./InputView.js";
import ResultView from "./ResultView.js";
import Controller from "./Controller.js";
import Model from "./Model.js";

const inputView = new InputView();
const resultView = new ResultView();
const controller = new Controller();
const model = new Model();

controller.model = model;
controller.inputView = inputView;
controller.resultView = resultView;
    