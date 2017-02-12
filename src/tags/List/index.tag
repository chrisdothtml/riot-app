<List>
  <div class="List">

    <List-Actions/>

    <ul class="List-notes">
      <li
        each="{ showingNotes }"
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
    import { selectNote } from '../../state/actions.js'
    import { notes, stateView } from './selectors.js'
    import { filterNotes } from '../../common/utils.js'
    import '../List-Actions/index.tag'
    import './index.scss'

    this.subscribe(notes)
    this.subscribe(stateView)

    // filter notes on update
    this.on('update', () => {
      this.showingNotes = filterNotes(this.store.getState())
    })

    clickNote (event) {
      this.dispatch(
        selectNote(event.item.id)
      )
    }
  </script>
</List>
