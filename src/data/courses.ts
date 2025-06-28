import { Course } from '../types'

export const courses: Course[] = [
  {
    id: 'arduino-basics',
    title: 'Arduino Fundamentals',
    description: 'Learn the basics of Arduino programming, from setup() and loop() to digital I/O',
    difficulty: 'beginner',
    estimatedTime: '2 hours',
    xpReward: 500,
    category: 'Programming',
    thumbnail: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 'setup-loop',
        title: 'Setup and Loop Functions',
        content: `
# Arduino Program Structure

Every Arduino program (called a "sketch") has two main functions:

## setup()
- Runs **once** when the Arduino starts
- Used for initialization
- Set pin modes, start serial communication, etc.

## loop()
- Runs **continuously** after setup()
- Contains your main program logic
- Repeats forever until power is removed

## Basic Template
\`\`\`cpp
void setup() {
  // Initialization code here
  // Runs once
}

void loop() {
  // Main program code here
  // Runs repeatedly
}
\`\`\`

The Arduino executes setup() first, then loop() over and over again.
        `,
        type: 'theory',
        xpReward: 50
      },
      {
        id: 'digital-io',
        title: 'Digital Input/Output',
        content: `
# Digital I/O

Digital pins can be either HIGH (5V) or LOW (0V).

## Setting Pin Mode
\`\`\`cpp
pinMode(pin, mode);
\`\`\`
- **pin**: Pin number (0-13)
- **mode**: INPUT, OUTPUT, or INPUT_PULLUP

## Digital Output
\`\`\`cpp
digitalWrite(pin, value);
\`\`\`
- **value**: HIGH or LOW

## Digital Input
\`\`\`cpp
int value = digitalRead(pin);
\`\`\`
- Returns HIGH or LOW

## Example: Blink LED
\`\`\`cpp
void setup() {
  pinMode(13, OUTPUT);  // Built-in LED
}

void loop() {
  digitalWrite(13, HIGH);  // Turn on
  delay(1000);             // Wait 1 second
  digitalWrite(13, LOW);   // Turn off
  delay(1000);             // Wait 1 second
}
\`\`\`
        `,
        type: 'theory',
        xpReward: 75
      },
      {
        id: 'blink-practice',
        title: 'Practice: Blink LED',
        content: 'Write code to make the built-in LED (pin 13) blink every 500 milliseconds.',
        type: 'code',
        xpReward: 100,
        codeTemplate: `void setup() {
  // Set pin 13 as output
  
}

void loop() {
  // Turn LED on
  
  // Wait 500ms
  
  // Turn LED off
  
  // Wait 500ms
  
}`,
        expectedOutput: 'LED blinks every 500ms'
      },
      {
        id: 'digital-quiz',
        title: 'Digital I/O Quiz',
        content: 'Test your knowledge of digital input/output',
        type: 'quiz',
        xpReward: 75,
        quiz: [
          {
            id: 'q1',
            question: 'Which function runs only once when Arduino starts?',
            options: ['loop()', 'setup()', 'begin()', 'start()'],
            correctAnswer: 1,
            explanation: 'setup() runs once at the beginning, while loop() runs continuously.'
          },
          {
            id: 'q2',
            question: 'What does digitalWrite(13, HIGH) do?',
            options: ['Reads pin 13', 'Sets pin 13 to 5V', 'Sets pin 13 to 0V', 'Sets pin mode'],
            correctAnswer: 1,
            explanation: 'digitalWrite(pin, HIGH) sets the pin to 5V (logic high).'
          },
          {
            id: 'q3',
            question: 'Which pin mode is used for reading button input with internal pullup?',
            options: ['INPUT', 'OUTPUT', 'INPUT_PULLUP', 'PULLUP'],
            correctAnswer: 2,
            explanation: 'INPUT_PULLUP enables the internal pullup resistor for reliable button reading.'
          }
        ]
      }
    ]
  },
  {
    id: 'sensors-actuators',
    title: 'Sensors & Actuators',
    description: 'Learn to read sensors and control actuators like servos and motors',
    difficulty: 'intermediate',
    estimatedTime: '3 hours',
    xpReward: 750,
    category: 'Hardware',
    thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 'analog-input',
        title: 'Analog Input',
        content: `
# Analog Input

Analog pins can read voltages from 0V to 5V as digital values from 0 to 1023.

## analogRead()
\`\`\`cpp
int value = analogRead(pin);
\`\`\`
- **pin**: A0, A1, A2, A3, A4, A5
- Returns: 0-1023 (10-bit resolution)

## Converting to Voltage
\`\`\`cpp
float voltage = (value * 5.0) / 1023.0;
\`\`\`

## Example: Read Potentiometer
\`\`\`cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  float voltage = (sensorValue * 5.0) / 1023.0;
  
  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print(" Voltage: ");
  Serial.println(voltage);
  
  delay(500);
}
\`\`\`
        `,
        type: 'theory',
        xpReward: 75
      },
      {
        id: 'pwm-output',
        title: 'PWM Output',
        content: `
# PWM (Pulse Width Modulation)

PWM simulates analog output by rapidly switching between HIGH and LOW.

## analogWrite()
\`\`\`cpp
analogWrite(pin, value);
\`\`\`
- **pin**: 3, 5, 6, 9, 10, 11 (PWM pins marked with ~)
- **value**: 0-255 (0 = 0V, 255 = 5V)

## Example: Fade LED
\`\`\`cpp
int brightness = 0;
int fadeAmount = 5;

void setup() {
  pinMode(9, OUTPUT);
}

void loop() {
  analogWrite(9, brightness);
  
  brightness += fadeAmount;
  
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  
  delay(30);
}
\`\`\`
        `,
        type: 'theory',
        xpReward: 75
      }
    ]
  },
  {
    id: 'communication',
    title: 'Communication Protocols',
    description: 'Master Serial, I2C, and SPI communication for connecting multiple devices',
    difficulty: 'advanced',
    estimatedTime: '4 hours',
    xpReward: 1000,
    category: 'Communication',
    thumbnail: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 'serial-communication',
        title: 'Serial Communication',
        content: `
# Serial Communication

Serial communication allows Arduino to communicate with computers and other devices.

## Starting Serial
\`\`\`cpp
Serial.begin(baudRate);
\`\`\`
- Common baud rates: 9600, 115200

## Sending Data
\`\`\`cpp
Serial.print("Hello");      // No newline
Serial.println("World");    // With newline
Serial.print(value);        // Print variable
\`\`\`

## Reading Data
\`\`\`cpp
if (Serial.available()) {
  String data = Serial.readString();
  // Process data
}
\`\`\`

## Example: Echo Program
\`\`\`cpp
void setup() {
  Serial.begin(9600);
  Serial.println("Echo program started");
}

void loop() {
  if (Serial.available()) {
    String input = Serial.readString();
    Serial.print("You said: ");
    Serial.println(input);
  }
}
\`\`\`
        `,
        type: 'theory',
        xpReward: 100
      }
    ]
  }
]