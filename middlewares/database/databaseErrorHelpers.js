const User = require("../../models/User");
const CustomError = require("../../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const Question = require("../../models/Question");
const Answer = require("../../models/Answer");

const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return next(new CustomError("There is no such user with that ID.", 400));
  }
  next();
});
const checkQuestionExist = asyncErrorWrapper(async (req, res, next) => {
  const question_id = req.params.id || req.params.question_id;

  const question = await Question.findById(question_id);

  if (!question) {
    return next(
      new CustomError("There is no such question with that ID.", 400)
    );
  }
  next();
});
const checkQuestionAndAnswerExist = asyncErrorWrapper(
  async (req, res, next) => {
    const question_id = req.params.question_id;
    const answer_id = req.params.answer_id;

    const answer = await Answer.findOne({
      _id : answer_id,
      question : question_id,
    });

    if (!answer) {
      return next(
        new CustomError("There is no such answer with that ID associated with question ID.", 400)
      );
    }
    next();
  }
);
module.exports = {
  checkUserExist,
  checkQuestionExist,
  checkQuestionAndAnswerExist,
};
