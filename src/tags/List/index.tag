<List>
  <div class="List">

    <List-Actions/>

    <ul class="List-notes">
      <li
        each="{ store.notes }"
        role="button"
        class="{ selected: id === store.selectedNote }"
        data-id="{ id }"
        onclick="{ clickNote }"
      >
        <span>{ title }</span>
      </li>
    </ul>
  </div>

  <script>
    import data from './data.json'
    import '../List-Actions/index.tag'
    import './index.scss'

    /**
     * Selects the clicked note
     */
    clickNote (event) {
      const item = event.item

      //
    }
  </script>
</List>
