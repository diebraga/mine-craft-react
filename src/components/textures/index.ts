import { TextureLoader } from "three";
import DirtImg from '../../assets/dirt.jpeg'
import GlassImg from '../../assets/glass.jpeg'
import WoodImg from '../../assets/wood.jpeg'
import LogImg from '../../assets/log.jpeg'
import GrassImg from '../../assets/grass.jpeg'

const dirtTexture = new TextureLoader(DirtImg)
const glassTexture = new TextureLoader(GlassImg)
const groundTexture = new TextureLoader(GlassImg)
const woodTexture = new TextureLoader(WoodImg)
const logTexture = new TextureLoader(LogImg)
const grassTexture = new TextureLoader(GrassImg)

export {
  glassTexture,
  dirtTexture,
  groundTexture,
  logTexture,
  woodTexture,
  grassTexture
}