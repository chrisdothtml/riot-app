<List-Actions>
  <div class="Actions">
    <button class="btn" onclick="{ clickAdd }">Add Note</button>
    <button class="btn">Select Notes</button>
  </div>

  <script>
    import { createNote } from '../../actions.js'
    import './index.scss'

    clickAdd () {
      this.dispatch(createNote())
    }
  </script>
</List-Actions>
