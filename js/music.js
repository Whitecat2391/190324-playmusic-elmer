class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Silvera", "Gojira", "Go.jfif", "Silvera.mp3"),
    new Music("Drained", "Hypocrisy", "H.jpg","Drained.mp3"),
    new Music("Cease to exist", "Suicide Silence", "Suicide-Silence.webp", "Cease to Exist.mp3"),
    new Music("Blood Blind", "Cannibal Corpse", "CC.jpg", "Blood Blind.mp3" ),
    new Music("Spiritual Healing", "Death", "death.jpg", "Spiritual Healing.mp3"),
    new Music("Friends and lovers", "Incubus", "incubus.jpg", "Friends and Lovers.mp3"),
    new Music("WALS", "Kings of Leon", "kol.webp", "WALLS.mp3"),
    new Music("Stand inside your love", "Smashing Pumpkins", "sp.jpg", "Stand Inside Your Love.mp3"),
    new Music("Know your enemy","Rage Against the Machine", "ratm.webp", "Know Your Enemy.mp3"),

];
