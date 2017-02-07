<List>
  <div class="List">

    <Actions></Actions>

    <ul class="List-notes">
      <li
        each="{ notes }"
        role="button"
        class="{ selected: this.selected }"
        data-id="{ this.id }"
        onclick="{ clickNote }"
      >
        <span>{ title }</span>
      </li>
    </ul>
  </div>

  <script>
    import data from './data.json'
    import './Actions.tag'
    import './index.css'

    this.notes = data
    this.clickNote = (event) => {
      const item = event.item

      item.selected = !item.selected
    }
  </script>
</List>
