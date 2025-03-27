document.addEventListener("DOMContentLoaded", function () {
    class Tamagotchi {
        hunger: number;
        fun: number;
        energy: number;
        health: number;
        isAlive: boolean;
        lastInteraction: number;

        constructor() {
            this.hunger = 10;
            this.fun = 10;
            this.energy = 10;
            this.health = 0;
            this.isAlive = true;
            this.lastInteraction = Date.now();
        }

        updateBars(): void {
            if (!this.isAlive) return;
            (document.getElementById("food-bar") as HTMLElement).style.width = `${this.hunger * 10}%`;
            (document.getElementById("fun-bar") as HTMLElement).style.width = `${this.fun * 10}%`;
            (document.getElementById("energy-bar") as HTMLElement).style.width = `${this.energy * 10}%`;
            (document.getElementById("strength-bar") as HTMLElement).style.width = `${this.health * 10}%`;
        }

        checkGameOver(): void {
            let reason = "";

            if (this.health >= 10) {
                reason = "porque su salud llegó a 10.";
            } else if (this.hunger <= 0) {
                reason = "porque tiene demasiada hambre.";
            } else if (this.fun <= 0) {
                reason = "porque se aburrió demasiado.";
            } else if (this.energy <= 0) {
                reason = "porque no tenía energía.";
            }

            if (this.hunger <= 0 || this.fun <= 0 || this.energy <= 0 || this.health >= 10) {
                this.isAlive = false;
                alert(`¡Tu Bunny ha muerto! 😭 ${reason}`);
                (document.getElementById("reset-button") as HTMLElement).style.display = "block";
            }
        }

        decreaseStats(): void {
            if (this.isAlive) {
                this.hunger = Math.max(0, this.hunger - 1);
                this.fun = Math.max(0, this.fun - 1);
                this.energy = Math.max(0, this.energy - 1);
                this.updateBars();
                this.checkGameOver();
            }
        }

        eat(): void {
            if (this.isAlive) {
                this.hunger = Math.min(10, this.hunger + 2);
                if (this.hunger > 10) {
                    this.health = Math.min(10, this.health + 2);
                }
                this.updateBars();
            }
        }

        play(): void {
            if (this.isAlive) {
                this.fun = Math.min(10, this.fun + 3);
                this.updateBars();
            }
        }

        sleep(): void {
            if (this.isAlive) {
                this.energy = Math.min(10, this.energy + 2);
                this.updateBars();
            }
        }

        fight(): void {
            if (this.isAlive) {
                this.fun = Math.max(0, this.fun - 2);
                this.health = Math.min(10, this.health + 1);
                this.updateBars();
                this.checkGameOver();
            }
        }

        reset(): void {
            this.hunger = 10;
            this.fun = 10;
            this.energy = 10;
            this.health = 0;
            this.isAlive = true;
            this.lastInteraction = Date.now();
            this.updateBars();
            (document.getElementById("reset-button") as HTMLElement).style.display = "none";
        }
    }

    const bunny = new Tamagotchi();
    
    // Selección de botones y eventos
    document.querySelectorAll(".food").forEach(button => {
        button.addEventListener("click", () => bunny.eat());
    });

    document.querySelectorAll(".play").forEach(button => {
        button.addEventListener("click", () => bunny.play());
    });

    document.querySelectorAll(".sleep").forEach(button => {
        button.addEventListener("click", () => bunny.sleep());
    });

    document.querySelectorAll(".fight").forEach(button => {
        button.addEventListener("click", () => bunny.fight());
    });

    (document.getElementById("reset-button") as HTMLElement).addEventListener("click", () => bunny.reset());

    // Reducción de valores cada 5 segundos solo si el Bunny está vivo
    setInterval(() => {
        if (bunny.isAlive) {
            bunny.decreaseStats();
        }
    }, 5000);

    // Inicializar las barras
    bunny.updateBars();
});
