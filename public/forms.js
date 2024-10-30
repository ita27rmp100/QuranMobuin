const form = document.getElementById('s')
form.addEventListener('submit',(e)=>{
    const formData = new FormData(form)
    let surahValue = formData.get('surah')
    document.getElementById('voice').src = `./QuranMP3/${surahValue}.mp3`
    document.getElementById('voice').play()
})