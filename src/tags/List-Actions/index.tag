<List-Actions>
  <div class="Actions">

    <button
      class="btn"
      onclick="{ clickAdd }"
      show="{ selectedFolder === 'Active' }"
    >
      <span>Add Note</span>
    </button>

    <button class="btn btn-right">
      <span>Select Notes</span>
    </button>
  </div>

  <script>
    import { createNote } from '../../state/actions.js'
    import { selectedFolder } from './selectors.js'
    import './index.scss'

    this.subscribe(selectedFolder)

    clickAdd () {
      this.dispatch(createNote())
    }
  </script>
</List-Actions>
