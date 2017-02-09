<List>
  <div class="List">

    <List-Actions/>

    <ul class="List-notes">
      <li
        each="{ notes }"
        role="button"
        class="{ selected: id === selectedNote }"
        data-id="{ id }"
        onclick="{ clickNote }"
      >
        <span>{ title }</span>
      </li>
    </ul>
  </div>

  <script>
    import { selectNote } from '../../actions'
    import { notes, selectedNote } from './selectors.js'
    import '../List-Actions/index.tag'
    import './index.scss'

    this.subscribe(notes)
    this.subscribe(selectedNote)

    clickNote (event) {
      this.dispatch(
        selectNote(event.item.id)
      )
    }
  </script>
</List>
