class LikeSystem {
  constructor() {
    this.like = 0;
  }
  like() {
    this.likes++;
  }
  dislike() {
    this.likes--;
  }
  setLikes(value) {
    //cambiar valor, valor de enterada
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
    this.LikeSystem = new LikeSystem();
  }

  printComment() {
    console.log(`${this.user}:${this.comm}`);
  }

  //Para LikeSystem
  like() {
    this.LikeSystem.like();
  }
  dislike() {
    this.LikeSystem.dislike();
  }
  getlikes() {
    console.log(this.LikeSystem.likes);
  }
}

let comm1 = new Comment("Mario", "El gato lo ataco");

class video {
  constructor(seconds = 0, name = "") {
    this.name = name;
    this.seconds = seconds % 60;
    this.minutes = Math.floor(minutes/60);
    this.LikeSystem = new LikeSystem();
    this.Comment = [];
  }

  getCommentsNum(){
    console.log(this.comments.length);
  }
  printTime(){
    console.log(`${this.minutes}:${this.seconds}`); //imprima dos posiciones en cada uno
  }
  addComment(comment){
    this.comments.push(comment); //que no añada un numero
  }
  printComments(){
    try{
    for(let comment of this.comments){
        comment.printComment();
    }
    }
    catch(e){
        console.log(this.comments);
    }
  }

    like() {
    this.LikeSystem.like();
  }
  dislike() {
    this.LikeSystem.dislike();
  }
  getlikes() {
    console.log(this.LikeSystem.getlikes());
  }
}  
}

const video1 = new Video(1,30, "perritos comiendo");
const com1 = new Comment("Mario", "El gato lo atacó");

com1.printComment();
console.log(`El video1 tiene ${video1.likes} likes`);
