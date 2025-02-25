import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'
import { AllQuotes } from './assets/types/allQuotes';

function App() {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState<number>(2);

  const allQuotes: AllQuotes[] = [
    {
      id: 1,
      name: 'physics',
      quotes: [
        `I think we all change each other's paths. I don't know which law idea that is in physics, but I don't think any of us can live without affecting one another.`,
        `It should be possible to explain the laws of physics to a barmaid.`,
        `It is wrong to think that the task of physics is to find out how Nature is. Physics concerns what we say about Nature.`,
        `Physics is becoming too difficult for the physicists.`,
        `Studying physics, mathematics, and chemistry is worshipping God.`,
        `Quantum mechanics brought an unexpected fuzziness into physics because of quantum uncertainty, the Heisenberg uncertainty principle. String theory does so again because a point particle is replaced by a string, which is more spread out.`,
      ]
    },
    {
      id: 2,
      name: 'chemistry',
      quotes: [
        `Chemistry can be a good and bad thing. Chemistry is good when you make love with it. Chemistry is bad when you make crack with it.`,
        `In string theory, all particles are vibrations on a tiny rubber band; physics is the harmonies on the string; chemistry is the melodies we play on vibrating strings; the universe is a symphony of strings, and the 'Mind of God' is cosmic music resonating in 11-dimensional hyperspace.`,
        `I became an atheist because, as a graduate student studying quantum physics, life seemed to be reducible to second-order differential equations. Mathematics, chemistry and physics had it all. And I didn't see any need to go beyond that.`,
        `Just as the science and art of agriculture depend upon chemistry and botany, so the art of education depends upon physiology and psychology.`,
        `Because the theory of quantum mechanics could explain all of chemistry and the various properties of substances, it was a tremendous success. But still there was the problem of the interaction of light and matter.`,
        `I tried out various experiments described in treatises on physics and chemistry, and the results were sometimes unexpected. At times, I would be encouraged by a little unhoped-for success; at others, I would be in the deepest despair because of accidents and failures resulting from my inexperience.`,
      ]
    },
    {
      id: 3,
      name: 'biology',
      quotes: [
        `Biology is the most powerful technology ever created. DNA is software, protein are hardware, cells are factories.`,
        `Biology is the study of complicated things that have the appearance of having been designed with a purpose.`,
        `Nothing in biology makes sense except in the light of evolution.`,
        `Our world is built on biology and once we begin to understand it, it then becomes a technology.`,
        `Early AI was mainly based on logic. You're trying to make computers that reason like people. The second route is from biology: You're trying to make computers that can perceive and act and adapt like animals.`,
        `Biology always beats will power.`
      ]
    }
  ]

  const handleClick = (id: number) => {
    setSelected(id - 1);
  }

  const handleGenerate = () => {
    var random = Math.floor(Math.random() * 6)
    setText(allQuotes[selected].quotes[random]);
  }

  return (
    <div className='container'>
      <img src={logoImg} alt="logo frases" />

      <div className='container-content'>
          <h2>Categories</h2>
          <section>
            {allQuotes.map(item => (
              <button
                key={item.id}
                style={{
                  borderWidth: item.name === allQuotes[selected].name ? 2 : 0,
                  borderColor: '#1fa3db'
                }}
                onClick={() => handleClick(item.id)}
              >
                {item.name} 
              </button>
            ))}
          </section>

        <button onClick={handleGenerate} className='quotes-button'>Generate Quotes</button>

        {text !== '' && 
          <h3>"{text}"</h3>
        }
      </div>
      
    </div>
  )
}

export default App
