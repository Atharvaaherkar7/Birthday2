body { background: linear-gradient(135deg, #3a7bd5, #00d2ff); display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; }

.container { display: flex; align-items: center; justify-content: center; }

.birthdayCard { width: 300px; height: 400px; position: relative; perspective: 1000px; }

.cardFront, .cardInside { width: 100%; height: 100%; position: absolute; background: white; border-radius: 15px; text-align: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); }

.cardFront { background: #007bff; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; }

.cardInside { transform: rotateY(180deg); background: white; color: #007bff; padding: 20px; }

.happy, .bday, .toyou { font-size: 24px; margin: 10px 0; }

.cake { width: 50px; height: 50px; background: #ffcc00; border-radius: 50%; margin-top: 20px; }

.message { font-size: 16px; margin-top: 20px; }

.name { margin-top: 10px; font-weight: bold; }

