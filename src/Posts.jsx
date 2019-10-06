import * as React from 'react'
import styled from 'styled-components'

const FOLDERS = [
  {
    id: 1,
    name: 'Folder One',
    position: 1
  },
  {
    id: 2,
    name: 'Folder Two',
    position: 1
  },
  {
    id: 3,
    name: 'Folder Three',
    position: 1
  },
  {
    id: 4,
    name: 'Folder Four',
    position: 1
  },
  {
    id: 5,
    name: 'Folder Five',
    position: 1
  }
]

const useFolders = data => {
  const [folders, setFolders] = React.useState(data.map(folder => ({
    ...folder, items: []
  })))

  const addItem = (folderId, addItem) => {
    setFolders(currentFolders => {
      currentFolders.map(folder => ({
        ...folder,
        items: folderId == folder.id ? [...folder.items, addItem] : folder.items
      }))
    })
  }

  return { folders, addItem }
}

const Posts = props => {
  const { folders, addItem } = useFolders(FOLDERS)

  console.log(folders)
  return (
      <Wrapper>
        <h1>DnD Example</h1>
        <div className="Wrapper_Main">
          <div className="Wrapper_Side">
            <ul>
              {folders.map(folder => (
                <li key={folder.id}>
                  {folder.name}
                </li>
              ))}
            </ul>
          </div>        
        </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
`

export default Posts