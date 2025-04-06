Jet Coding Assignment

Overview:

This repository contains my coding assignment for the Early Careers Software Development program 2025. This project answers the problem sent by Jet.

This project is built using Vue.js, Tailwind CSS, and Shadcn/vue components(https://www.shadcn-vue.com/docs/introduction.html). I chose Vue.js because it is a reactive framework that works well with components, while Tailwind CSS makes styling applications more efficient, flexible and I like the way it is made for faster development. For some base components (card/button) I used shadcn/vue components because, even if pre-made, they are directly imported into the project, offering full control over the design, which allows for better customization and future maintainability.


Note: The incremental stages of the development(with all the important commits) can be found in the development branch.

##  Preview
![Project Screenshot](assignment-Jet\src\assets\screenshot.jpg)
![screenshot](https://github.com/user-attachments/assets/dcc50fc1-67a7-493d-bf50-e989fca9627d)

Quick UX walkthrough:
The app consists of only one Main Page. A step-by-step guide:
1. At the top of the page, you'll see a field labeled “Enter UK ZIP Code.” Type in a valid UK postcode(e.g.DH4 5QZ) or select one from the suggested postcode buttons below the input. Click a postcode button for a quicker search.(they contain the codes in the assignment)
2. Click the search icon to fetch restaurant data. The app will validate your postcode(red/green message).
3. The first 10 matching restaurants will appear as cards.  Each card includes: Name, cuisines (shown as tags), star rating, clickable address(opens Google Maps)

# Installation Instructions

1. Clone the repository
```
git clone https://github.com/catalina-petrus/assignment-Jet.git
```

2. Navigate to the project directory:
```
cd assignment-Jet
```

3. Install dependencies:

```
# npm for node projects (if aplicable)
npm install  
```

```
# Vue & Vite
npm install vue@^3.4.0
npm install -D vite
```
```
# Tailwind CSS (styling)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```
# Axios (HTTP requests)
npm install axios
```

```
# ShadCN (UI components via shadcn/vue)
npm install -D shadcn-vue @tailwindcss/forms class-variance-authority tailwind-variants
```

```
# Lucide (for icons)
npm install lucide-vue-next
```

```
# TypeScript (if not already installed)
npm install -D typescript
```

4. Usage

Run the application using the command:
```
npm run dev
```



#Contact


For any questions or inquiries, feel free to reach out to:

Author: Catalina Petrus

Email: petruscatalina@yahoo.com

GitHub: https://github.com/catalina-petrus
