function HomeApplianceAnimation() {
    try {
        const sketchRef = React.useRef(null);
        
        React.useEffect(() => {
            const sketch = (p) => {
                let washingMachine, refrigerator, airConditioner;
                let angle = 0;
                const colors = {
                    washingMachine: p.color(0, 240, 255),
                    refrigerator: p.color(255, 77, 255),
                    airConditioner: p.color(0, 255, 157)
                };
                
                p.setup = () => {
                    const canvas = p.createCanvas(
                        p.windowWidth > 768 ? 400 : 300, 
                        p.windowWidth > 768 ? 300 : 200
                    );
                    canvas.parent('home-appliance-container');
                    
                    // Initialize appliance positions
                    washingMachine = {
                        x: p.width * 0.25,
                        y: p.height * 0.5,
                        size: p.width * 0.15,
                        floatOffset: p.random(100)
                    };
                    
                    refrigerator = {
                        x: p.width * 0.5,
                        y: p.height * 0.5,
                        size: p.width * 0.15,
                        floatOffset: p.random(100)
                    };
                    
                    airConditioner = {
                        x: p.width * 0.75,
                        y: p.height * 0.5,
                        size: p.width * 0.15,
                        floatOffset: p.random(100)
                    };
                };
                
                p.draw = () => {
                    p.background(15, 15, 35, 0);
                    p.noStroke();
                    
                    // Update angle for floating animation
                    angle += 0.05;
                    
                    // Draw washing machine
                    drawWashingMachine(
                        washingMachine.x, 
                        washingMachine.y + p.sin(angle + washingMachine.floatOffset) * 10,
                        washingMachine.size,
                        colors.washingMachine
                    );
                    
                    // Draw refrigerator
                    drawRefrigerator(
                        refrigerator.x, 
                        refrigerator.y + p.sin(angle + refrigerator.floatOffset) * 10,
                        refrigerator.size,
                        colors.refrigerator
                    );
                    
                    // Draw air conditioner
                    drawAirConditioner(
                        airConditioner.x, 
                        airConditioner.y + p.sin(angle + airConditioner.floatOffset) * 10,
                        airConditioner.size,
                        colors.airConditioner
                    );
                    
                    // Draw connections
                    drawConnections(p);
                };
                
                p.windowResized = () => {
                    p.resizeCanvas(
                        p.windowWidth > 768 ? 400 : 300, 
                        p.windowWidth > 768 ? 300 : 200
                    );
                };
                
                function drawWashingMachine(x, y, size, color) {
                    p.push();
                    p.translate(x, y);
                    
                    // Main body
                    p.fill(color);
                    p.rectMode(p.CENTER);
                    p.rect(0, 0, size, size * 1.2, 5);
                    
                    // Door
                    p.fill(40);
                    p.ellipse(0, 0, size * 0.8, size * 0.8);
                    
                    // Door handle
                    p.fill(200);
                    p.ellipse(size * 0.3, 0, size * 0.1, size * 0.1);
                    
                    // Controls
                    p.fill(60);
                    p.rect(0, -size * 0.5, size * 0.6, size * 0.15, 3);
                    
                    p.pop();
                }
                
                function drawRefrigerator(x, y, size, color) {
                    p.push();
                    p.translate(x, y);
                    
                    // Main body
                    p.fill(color);
                    p.rectMode(p.CENTER);
                    p.rect(0, 0, size * 0.7, size * 1.8, 5);
                    
                    // Door line
                    p.stroke(40);
                    p.strokeWeight(2);
                    p.line(0, -size * 0.85, 0, size * 0.85);
                    
                    // Handle
                    p.noStroke();
                    p.fill(180);
                    p.rect(-size * 0.35, 0, size * 0.05, size * 0.3, 2);
                    
                    p.pop();
                }
                
                function drawAirConditioner(x, y, size, color) {
                    p.push();
                    p.translate(x, y);
                    
                    // Main body
                    p.fill(color);
                    p.rectMode(p.CENTER);
                    p.rect(0, 0, size * 1.5, size * 0.5, 5);
                    
                    // Vents
                    p.fill(30);
                    for (let i = -3; i <= 3; i++) {
                        p.rect(i * size * 0.2, 0, size * 0.1, size * 0.4);
                    }
                    
                    // Logo
                    p.fill(255);
                    p.textSize(size * 0.15);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.text("AI", 0, 0);
                    
                    p.pop();
                }
                
                function drawConnections(p) {
                    p.stroke(255, 100);
                    p.strokeWeight(1);
                    
                    // Connect washing machine to refrigerator
                    p.line(
                        washingMachine.x, 
                        washingMachine.y + p.sin(angle + washingMachine.floatOffset) * 10,
                        refrigerator.x, 
                        refrigerator.y + p.sin(angle + refrigerator.floatOffset) * 10
                    );
                    
                    // Connect refrigerator to air conditioner
                    p.line(
                        refrigerator.x, 
                        refrigerator.y + p.sin(angle + refrigerator.floatOffset) * 10,
                        airConditioner.x, 
                        airConditioner.y + p.sin(angle + airConditioner.floatOffset) * 10
                    );
                    
                    // Connect air conditioner to washing machine
                    p.line(
                        airConditioner.x, 
                        airConditioner.y + p.sin(angle + airConditioner.floatOffset) * 10,
                        washingMachine.x, 
                        washingMachine.y + p.sin(angle + washingMachine.floatOffset) * 10
                    );
                }
            };
            
            sketchRef.current = new p5(sketch);
            
            return () => {
                if (sketchRef.current) {
                    sketchRef.current.remove();
                    sketchRef.current = null;
                }
            };
        }, []);
        
        return (
            <div 
                data-name="home-appliance-animation"
                id="home-appliance-container"
                className="w-full h-full relative z-10 rounded-xl overflow-hidden"
            />
        );
    } catch (error) {
        console.error('HomeApplianceAnimation component error:', error);
        reportError(error);
    }
}
