import fs from 'fs'

const saveToJSON = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos)
  fs.writeFileSync(fileName, parsedInfo)
}

export default saveToJSON
