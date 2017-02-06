<test>
  <heading text="{ words }"></heading>
  <button onclick="{ click }">You should click me</button>

  <script>
    import { click } from '../events.js'
    import './heading.tag'

    this.words = 'Hello, world!'
    this.click = click
  </script>
</test>
