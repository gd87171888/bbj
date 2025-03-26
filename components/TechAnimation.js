function TechAnimation({ canvasId }) {
    try {
        const sketchRef = React.useRef(null);

        React.useEffect(() => {
            const sketch = (p) => {
                let particles = [];
                let techIcons = ['robot', 'microchip', 'brain', 'atom', 'vr-cardboard'];
                let colors = [
                    p.color(0, 240, 255),   // cyan
                    p.color(138, 43, 226),  // purple
                    p.color(0, 255, 157),   // accent green
                    p.color(255, 77, 255),  // pink
                    p.color(255, 215, 0)    // gold
                ];

                p.setup = () => {
                    const container = document.getElementById(canvasId).parentElement;
                    const width = container.offsetWidth;
                    const height = Math.min(400, window.innerHeight * 0.5);
                    
                    p.createCanvas(width, height).parent(canvasId);
                    p.background(15, 15, 35, 0);
                    
                    // Create initial particles
                    for (let i = 0; i < 30; i++) {
                        particles.push(createParticle(p));
                    }
                };

                p.draw = () => {
                    p.clear();
                    p.background(15, 15, 35, 50);
                    
                    // Update and display particles
                    for (let i = particles.length - 1; i >= 0; i--) {
                        particles[i].update();
                        particles[i].display();
                        
                        // Remove particles that are off screen
                        if (particles[i].isOffScreen()) {
                            particles.splice(i, 1);
                            particles.push(createParticle(p));
                        }
                    }
                    
                    // Draw connecting lines between particles
                    drawConnections(p, particles);
                };

                p.windowResized = () => {
                    const container = document.getElementById(canvasId).parentElement;
                    p.resizeCanvas(container.offsetWidth, p.height);
                };

                function createParticle(p) {
                    const speed = p.random(0.5, 2);
                    const size = p.random(5, 15);
                    const color = colors[p.floor(p.random(colors.length))];
                    const icon = techIcons[p.floor(p.random(techIcons.length))];
                    
                    return {
                        x: p.random(p.width),
                        y: p.random(p.height),
                        size: size,
                        speedX: p.random(-speed, speed),
                        speedY: p.random(-speed, speed),
                        color: color,
                        icon: icon,
                        rotation: p.random(p.TWO_PI),
                        rotationSpeed: p.random(-0.02, 0.02),
                        
                        update: function() {
                            this.x += this.speedX;
                            this.y += this.speedY;
                            this.rotation += this.rotationSpeed;
                            
                            // Bounce off edges
                            if (this.x < 0 || this.x > p.width) this.speedX *= -1;
                            if (this.y < 0 || this.y > p.height) this.speedY *= -1;
                        },
                        
                        display: function() {
                            p.push();
                            p.translate(this.x, this.y);
                            p.rotate(this.rotation);
                            p.fill(this.color);
                            p.noStroke();
                            
                            // Draw icon
                            p.textSize(this.size);
                            p.textAlign(p.CENTER, p.CENTER);
                            p.textFont('FontAwesome');
                            p.text(p.char(parseInt('f' + this.icon.charCodeAt(0).toString(16), 16)), 0, 0);
                            p.pop();
                        },
                        
                        isOffScreen: function() {
                            return this.x < -50 || this.x > p.width + 50 || 
                                   this.y < -50 || this.y > p.height + 50;
                        }
                    };
                }
                
                function drawConnections(p, particles) {
                    for (let i = 0; i < particles.length; i++) {
                        for (let j = i + 1; j < particles.length; j++) {
                            const distance = p.dist(
                                particles[i].x, particles[i].y,
                                particles[j].x, particles[j].y
                            );
                            
                            if (distance < 150) {
                                const alpha = p.map(distance, 0, 150, 200, 0);
                                p.stroke(255, 255, 255, alpha);
                                p.strokeWeight(0.5);
                                p.line(
                                    particles[i].x, particles[i].y,
                                    particles[j].x, particles[j].y
                                );
                            }
                        }
                    }
                }
            };

            sketchRef.current = new p5(sketch);
            
            return () => {
                if (sketchRef.current) {
                    sketchRef.current.remove();
                    sketchRef.current = null;
                }
            };
        }, [canvasId]);

        return <div id={canvasId} className="absolute inset-0 z-0"></div>;
    } catch (error) {
        console.error('TechAnimation component error:', error);
        reportError(error);
    }
}
