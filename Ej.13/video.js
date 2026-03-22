class LikeSystem {
  constructor() {
    this.likes = 0;
  }
  like() {
    this.likes++;
  }
  dislike() {
    this.likes--;
  }
  setLikes(value) {
    this.likes = value;
  }
  getLikes() {
    return this.likes;
  }
}

class Comment {
  constructor(user = "", comm = "") {
    this.user = user;
    this.comm = comm;
    this.likes = 0;
    this.likeSystem = new LikeSystem();
  }
  printComment() {
    console.log(`${this.user}:${this.comm}`);
  }
  like() {
    this.likeSystem.like();
    this.likes = this.likeSystem.getLikes();
  }
  dislike() {
    this.likeSystem.dislike();
    this.likes = this.likeSystem.getLikes();
  }
}

class video {
  constructor(minutes = 0, seconds = 0, name = "") {
    this.name = name;
    this.minutes = minutes;
    this.seconds = seconds;
    this.likes = 0;
    this.likeSystem = new LikeSystem();
    this.comments = [];
  }

  getCommentsNum() {
    return this.comments.length;
  }

  printTime() {
    let min = this.minutes;
    let sec = this.seconds;

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    console.log(`${min}:${sec}`);
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  printComments() {
    let numero = 1;
    try {
      for (let comment of this.comments) {
        console.log(`Comentario ${numero}:`);
        comment.printComment();
        numero++;
      }
    } catch (e) {
      console.log(this.comments);
    }
  }

  like() {
    this.likeSystem.like();
    this.likes = this.likeSystem.getLikes();
  }

  dislike() {
    this.likeSystem.dislike();
    this.likes = this.likeSystem.getLikes();
  }
}

const com1 = new Comment("Mario", " El gato lo atacó");
const com2 = new Comment("Lucía", " Se asustó");
const com3 = new Comment("Juan", " Al menos ganó");

const video1 = new video(1, 30, "perritos comiendo");
const video2 = new video(3, 45, "gatos peleando");

com1.printComment();
com2.printComment();
com3.printComment();

video1.like();
video2.like();
video2.like();

com1.like();

console.log(`\n VIDEO: ${video1.name} `);
console.log(`\nEl video 1 tiene ${video1.likes} likes`);
video1.printTime();
video1.addComment(com1);
video1.addComment(com2);
video1.printComments();

console.log(`\n VIDEO: ${video2.name} `);
console.log(`\nEl video 2 tiene ${video2.likes} likes`);
video2.printTime();
video2.addComment(com3);
video2.addComment(com2);
video2.addComment(com1);
video2.printComments();
