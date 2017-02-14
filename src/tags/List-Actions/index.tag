<List-Actions>
  <div class="Actions">

    <button
      class="btn"
      onclick="{ clickAdd }"
      show="{ view.folder === 'Active' }"
    >
      <span>Add Note</span>
    </button>

    <button class="btn btn-right">
      <span>Select Notes</span>
    </button>
  </div>

  <script>
    import { createNote } from '../../state/actions.js'
    import { view_folder } from '../../state/selectors.js'
    import './index.scss'

    this.subscribe(view_folder)

    clickAdd () {
      this.dispatch(createNote())
    }
  </script>
</List-Actions>
