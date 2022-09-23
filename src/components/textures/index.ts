import { TextureLoader } from "three";
import DirtImg from '../../assets/dirt.jpeg'
import GlassImg from '../../assets/glass.jpeg'
import WoodImg from '../../assets/wood.jpeg'
import LogImg from '../../assets/log.jpeg'
import GrassImg from '../../assets/grass.jpeg'

const dirtTexture = new TextureLoader().load(DirtImg)
const glassTexture = new TextureLoader().load(GlassImg)
const groundTexture = new TextureLoader().load(GrassImg)
const woodTexture = new TextureLoader().load(WoodImg)
const logTexture = new TextureLoader().load(LogImg)
const grassTexture = new TextureLoader().load(GrassImg)

export {
  glassTexture,
  dirtTexture,
  groundTexture,
  logTexture,
  woodTexture,
  grassTexture
}