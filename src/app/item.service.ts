import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private items: Item[] = [
        {
            id: 1, name: 'Education', description: 'B.Tech in Computer Science Engineering (Internet of Things), Shiv Nadar University Chennai <br>' + 'Graduation: Expected 2025 <br>' + ' Relevant coursework: C, Python, Java OOPS programming, Software Engineering, Operating System, Data Structures, Design and Analysis of algorithms, DBMS, Computer Networks, Cyber security, Distributed Computing, Cloud Computing, Web Technologies, Sensor tech and Instrumentation, IoT architecture, Dynamic Paradigm in IoT<br><br>' + 'Chennai Public School<br>' + 'Graduation: July 2021<br>' + 'Relevant coursework: Physics, Mathematics, Chemistry, Biology'
        },
        { id: 2, name: 'Experience', description: 'Flutter Application Developer, AppLever<br><br>' + ' TechIn-Plant Training @ ISRO Propulsion Complex (IPRC), Mahendragiri, Tamil Nadu' },
        {
            id: 3, name: 'Projects', description: 'Discord Moderation Bot using Python 🌐<br><br>' + 'Created multiple discord bots using python API wrapper Discord.py to perform various functions and help improve the engagement of various discord servers with over 10,000 members by 50%.<br><br>' + 'Big 5 Personality Quiz App using Flutter and Dart 🌐<br><br>' + 'The Big Five personality test, also known as the OCEAN personality test, is based on the Big Five model that defines human personality as the combination of 5 personality traits or factors: Openness, Conscientiousness, Extraversion, Agreeableness and Neuroticism.'
        },
        {
            id: 4, name: 'Skills', description: 'Programming Language : Java, Python, C/ C++<br><br>' + 'Web Development : HTML, CSS, JavaScript<br><br>' + 'App Development : Flutter, Dart<br><br>' + 'Other SkillsMySQL, Agile Development, Scrum, Git, Github<br><br>'
        }
    ];

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item | undefined {
        return this.items.find(item => item.id === id);
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    updateItem(updatedItem: Item): void {
        const index = this.items.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
            this.items[index] = updatedItem;
        }
    }

    deleteItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}
