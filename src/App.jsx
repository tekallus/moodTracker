import { useState } from 'react'
import diaryData from './diaryData'
import DiaryCard from './components/DiaryCard'
import Menu from './components/Menu'
import './styles.css'
export default function App() {
  /* Challenge 

İki DiaryCard elementi şu anda aşağıdaki verilerle sabit olarak kodlanmıştır. Göreviniz, diaryData.js dosyasındaki 14 günlük verinin tamamı için otomatik olarak DiaryCard elementleri oluşturmak üzere döngünün gücünü kullanmaktır. 

    1. Sabit kodlanmış DiaryCard elementlerinin her ikisi de silinmeli ve yerine toplam 14 
       otomatik olarak oluşturulan elementler eklenmeli. 
    
    2. İlk iki kart orijinal kodlanmış kartlarla aynı görünmeli ve geri kalanı 
       kartlar benzer görünmelidir. 
        
    3. Kodu kısa ve anlaşılır hale getiriniz. 
*/
  //renderDiaryCards adında bir fonksiyon oluşturuldu.
  //map fonksiyonu, her bir öğeyi dönerek yeni bir değer üretmenizi sağlar.
  //diaryData array'ini map ile her günlük giriş için bir DiaryCard bileşeni oluşturur.
  {
    /*const renderDiaryCards = () => {
    return diaryData.map((day) => (
      <DiaryCard
        key={day.id}
        date={day.date}
        rating={day.rating}
        emotions={day.emotions}
        activities={day.activities}
        note={day.note}
      />
    ))
  }*/
  }
  //JSX kodu, main bölümündeki renderDiaryCards() fonksiyonunun sonucuyla değiştirilmiştir.
  //Bu sayede DiaryCard bileşenleri dinamik olarak oluşturulur ve diaryData array'indeki giriş sayısına göre otomatik olarak uyarlanır.
  return (
    <div>
      {/* Menu bileşeni, skip prop'ıyla birlikte kullanılıyor */}
      <Menu skip={false} />

      <main className="main-container">
        <div className="sub-header">
          {/* Sayfa başlığı */}
          <h3>Nisan Raporu</h3>
        </div>
        {/*{renderDiaryCards()} fonksiyonu asagidaki kod kullanilarak yukaridaki renderDiaryCards = () => {} fonksiyonuna ihtiyac kalmadigi icin kullanilmamistir ,bu*/}
        {/* map fonksiyonu içindeki her bir diaryData öğesi için destructuring kullanılarak, 
        prop'ların daha kısa ve net bir şekilde aktarılmasını sağlıyoruz.
         Her bir öğe içindeki özellikleri doğrudan <DiaryCard> bileşenine prop olarak iletiyoruz
         bu sayede kodun okunabilirligi artti ve tekrar azaltildi*/}
        {diaryData.map(({ id, date, rating, emotions, activities, note }) => (
          <DiaryCard
            key={id}
            date={date}
            rating={rating}
            emotions={emotions}
            activities={activities}
            note={note}
          />
        ))}
      </main>
    </div>
  )
}
