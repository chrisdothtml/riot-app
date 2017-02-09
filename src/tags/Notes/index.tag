<Notes>
  <div class="Notes">

    <Folder-Picker/>

    <div class="container content">

      <div class="col-3">
        <List/>
      </div>

      <div class="col-9">
        <Editor/>
      </div>
    </div>
  </div>

  <script>
    import { addNotes } from '../../actions'
    import data from '../../data.json'
    import '../Editor/index.tag'
    import '../Folder-Picker/index.tag'
    import '../List/index.tag'
    import './index.scss'

    this.on('mount', () => {
      setTimeout(() => {
        this.dispatch(addNotes(data))
      }, 500)
    })
  </script>
</Notes>
