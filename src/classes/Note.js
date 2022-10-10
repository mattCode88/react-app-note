export default class Note{
    constructor(
        id,
        title,
        text,
        createdAt,
        deadline,
        important = false
    ) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.createdAt = createdAt;
        this.deadline = deadline;
        this.important = important
    }
}