<Notes>
  <Heading text="{ words }"></Heading>
  <button onclick="{ click }">You should click me</button>

  <script>
    import { updateWords } from './events.js'
    import '../Heading/index.tag'

    this.words = 'Hello, world!'
    this.click = updateWords.bind(this)
  </script>
</Notes>
