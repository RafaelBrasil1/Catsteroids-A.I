class Projectile {
    constructor({ position, velocity, radius, damage}) {
        this.pos = position;
        this.vel = velocity;
        this.radius = radius;
        this.dmg = damage;
        this.vida = this.dmg;

    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath()
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    updt() {
        this.draw();
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
}