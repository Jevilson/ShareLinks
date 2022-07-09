import Container from "./components/Container/Container"

import ButtonBlue from "./components/ButtonList/blue"
import ButtonPink from "./components/ButtonList/pink"

import AvatarBlue from "./components/Avatar/blue"
import AvatarPink from "./components/Avatar/pink"

import InfoWhite from "./components/InfoUser/InfoWhite"
import InfoBlack from "./components/InfoUser/InfoBlack"

import FooterBlack from "./components/Footer/FooterBlack"
import FooterWhite from "./components/Footer/FooterWhite"

function App() {

  let theme = "blue" // options = darkPink, darkBlue, blue, pink

  function checkTheme(darkMode) {
    if (!darkMode) {
      if (theme == "blue" || theme == "darkBlue") {
        return true
      } else if (theme == "pink" || theme == "darkPink") {
        return false
      }
    } else {
      if (theme == "darkPink" || theme == "darkBlue") {
        return true
      } else {
        return false
      }
    }
  }

  let links = [
    {
      id: 1,
      link: 'https://www.youtube.com/channel/UCqaOaWuLBsXCL8yF3I3qVbw',
      texto: '📹 Youtube'
    },
    {
      id: 2,
      link: 'https://www.instagram.com/jevilson_/',
      texto: '📷 Insta'
    },
    {
      id: 3,
      link: 'https://twitter.com/jevilson',
      texto: '🐦 Twitter'
    },
    {
      id: 4,
      link: 'https://github.com/jevilson',
      texto: '🐱 Github'
    }
  ]

  return (
    <Container optionTheme={theme}>
      <div className="text-center	w-80 my-16 mx-auto">
        {checkTheme() ? <AvatarBlue link="https://i.ibb.co/JyhTFhM/290925426-417994713711866-367385590139159847-n.jpg" /> : <AvatarPink link="https://i.ibb.co/JyhTFhM/290925426-417994713711866-367385590139159847-n.jpg" />}
        {checkTheme("on") ? <InfoWhite name="Jevilson" user="@jevilson_" /> : <InfoBlack name="Jevilson" user="@jevilson_" />}

        <ul className="list-none my-10">
          {checkTheme() ? links.map((link) => (
            <ButtonBlue key={link.id} link={link.link} texto={link.texto} />
          )) : links.map((link) => (
            <ButtonPink key={link.id} link={link.link} texto={link.texto} />
          ))}
        </ul>

        {checkTheme("on") ? <FooterWhite /> : <FooterBlack />}

      </div>
    </Container>

  )
}

export default App
