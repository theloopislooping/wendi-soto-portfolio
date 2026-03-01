import { motion } from 'motion/react'

const images = [
  'IMG_0235.JPG',
  '504377041_23925616250407845_1777867495454440382_n.jpg',
  '505517971_23926559673646836_3478908746312958786_n.jpg',
  '506355170_23950781384557998_130819483073215977_n.jpg',
  '505748915_23933381396297997_3262218818106890900_n.jpg',
  'IMG_0237.JPG',
  '505498444_23929585440010926_8528324113570306583_n.jpg',
  '504896706_23919443147691822_759037984233815641_n.jpg',
  '505411712_23934299142872889_689175036784073677_n.jpg',
  '503802409_23921916307444506_3171528716494380264_n.jpg',
  'IMG_0232.JPG',
  '504270705_23922474417388695_6731957351191137563_n.jpg',
  '505582786_23929585486677588_313775610150413676_n.jpg',
  '505299637_23922687290700741_3507597368802333402_n.jpg',
  'IMG_0240.JPG',
  '505252732_23928977820071688_3321630113688247141_n.jpg',
]

export default function ConfessionsGallery() {
  // Double the images for seamless infinite scroll
  const doubled = [...images, ...images]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-6 -mx-12 sm:-mx-16 overflow-hidden"
    >
      <div className="flex gap-3 animate-scroll">
        {doubled.map((img, i) => (
          <img
            key={`${img}-${i}`}
            src={`/confessions/${img}`}
            alt="Life Confessions post"
            loading="lazy"
            className="h-36 sm:h-44 w-auto rounded-lg object-cover shrink-0 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>
    </motion.div>
  )
}
