<Actions>
  <div class="Actions">
    <button class="btn" onclick="{ addNote }">Add Note</button>
    <button class="btn">Select Notes</button>
  </div>

  <script>
    import './index.scss'

    this.mixin('state')

    /**
     * Adds a new note
     */
    addNote () {
      this.publish('addNote')
    }
  </script>
</Actions>
