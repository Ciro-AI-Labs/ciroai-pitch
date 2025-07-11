# CIRO AI Labs - Dynamic Pitch Deck

A **live, interactive pitch presentation** built with React and Next.js that demonstrates CIRO AI's real-time capabilities through code.

## 🚀 **What Makes This Different**

This isn't just a prettier PowerPoint. It's a **dynamic presentation** that:

- ✨ **Live cost counters** showing accumulating industrial inefficiencies
- 🎯 **Interactive navigation** with smooth animations
- 📊 **Real-time charts** and growth metrics  
- 🎮 **Keyboard controls** for seamless presenting
- 💫 **Animated architecture** diagrams with data flows
- 🔥 **Presentation mode** for distraction-free demos

## 🛠️ **Tech Stack**

- **Frontend**: React 18 + Next.js 14
- **Animations**: Framer Motion
- **Charts**: Recharts + D3.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🏃‍♂️ **Quick Start**

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: 
   ```
   http://localhost:3000
   ```

## 🎮 **Navigation Controls**

| Key | Action |
|-----|--------|
| `←` `→` | Navigate slides |
| `Space` | Next slide |
| `F` | Toggle presentation mode |
| `Esc` | Exit presentation mode |

## 📊 **Dynamic Features**

### **Slide 1: Opening** 
- Live cost counter ticking up in real-time
- Heartbeat animation with glowing effects

### **Slide 3: Solution** 
- Animated CIRO architecture with data flows
- Orbital component system with connecting lines

### **Slide 6: Traction**
- Live MRR counter animation 
- Real-time revenue accumulator
- Interactive growth charts

### **Slide 12: Closing**
- Rotating CIRO logo animation
- Pulsing contact information

## 🎨 **Customization**

### **Colors**
The CIRO brand colors are defined in `tailwind.config.js`:
```javascript
ciro: {
  500: '#f97316', // Main CIRO orange
  // ... other shades
}
```

### **Adding New Slides**
1. Create component in `components/slides/`
2. Add to slides array in `app/page.tsx`
3. Export from component file

### **Animation Timing**
Modify delays in Framer Motion components:
```javascript
transition={{ duration: 0.8, delay: 1.2 }}
```

## 🌐 **Deployment**

### **Vercel** (Recommended)
```bash
npm run build
vercel deploy
```

### **Other Platforms**
```bash
npm run build
npm start
```

## 🔧 **Development**

### **Project Structure**
```
ciro-dynamic-pitch-deck/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles & animations  
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main presentation
├── components/slides/     # Individual slide components
├── tailwind.config.js     # CIRO brand styling
└── package.json           # Dependencies
```

### **Creating Dynamic Elements**

1. **Counters**:
```javascript
const [count, setCount] = useState(0)
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1)
  }, 100)
  return () => clearInterval(timer)
}, [])
```

2. **Animations**:
```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## 📈 **Performance**

- **Lighthouse Score**: 95+ 
- **Load Time**: <2s on fast 3G
- **Smooth 60fps** animations
- **Responsive** on all devices

## 🎯 **Use Cases**

Perfect for:
- **Investor pitches** with live data
- **Demo days** requiring technical credibility  
- **Client presentations** showing real capabilities
- **Conference talks** with interactive elements

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-slide`
3. Commit changes: `git commit -m 'Add market slide animation'`
4. Push branch: `git push origin feature/new-slide`
5. Submit pull request

## 📝 **License**

MIT License - see LICENSE file for details.

---

**Built with ❤️ by CIRO AI Labs**  
*Transforming industrial intelligence, one slide at a time.*

## 🚀 **Live Demo**

Experience the dynamic pitch deck: **[deck.cirolabs.ai](https://deck.cirolabs.ai)**

---

*Questions? Contact victor@cirolabs.ai* 