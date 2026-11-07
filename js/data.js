import { getRandomInteger, getRandomArrayElement, createUniqueIdGenerator } from './util.js';

const NAMES = ['Артём', 'Мария', 'Александр', 'Анна', 'Дмитрий', 'Елена', 'Михаил', 'Ольга', 'Иван', 'Наталья'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = ['Отличный день!', 'Прекрасный вид.', 'Тестирую камеру.', 'Яркие краски.', 'Просто красивый кадр.'];

const generatePhotoId = createUniqueIdGenerator();
const generateCommentId = createUniqueIdGenerator(); 

const createMessage = () => {
  const sentencesCount = getRandomInteger(1, 2);
  const commentParts = [];
  for (let i = 0; i < sentencesCount; i++) {
    commentParts.push(getRandomArrayElement(MESSAGES));
  }
  return commentParts.join(' ');
};

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => {
  const id = generatePhotoId();
  const commentsCount = getRandomInteger(0, 30);
  const comments = Array.from({ length: commentsCount }, createComment);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: comments,
  };
};

export const createPhotos = () => Array.from({ length: 25 }, createPhotoDescription);
