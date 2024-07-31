import React from "react";
import "./product_bottom.scss";
import { SiAntdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineHighQuality } from "react-icons/md";
import { RiContractLine } from "react-icons/ri";

export default function Product_bottom() {
  return (
    <div className="p_bottom">
      <h2>Nega siz SerenMebeldan harid qilishingiz kerak?</h2>
      <div className="b_group_txt">
        <div className="b_parts">
          <SiAntdesign />
          <p>
            Interior design orqali biz sizning ehtiyojlaringiz va didingizga mos
            keladigan chiroyli va funktsional dizaynni yaratishga yordam
            beramiz. Biz sizning uyingizda qulay va uyg'un joy yaratish uchun
            mavjud materiallar va mebellardan foydalanamiz. Bizning jamoamiz
            sizga loyihada yordam berishga va ishning eng yuqori sifatini
            ta'minlashga doimo tayyor. Uyingizni interyerini o`z xohishingizday
            yarating . Bunda biz zamonaviy dasturlardan foydalangan holda amalga
            oshiramiz.
          </p>
        </div>
        <div className="b_parts">
          <GrTechnology />
          <p>
            Hozirgi kunda texnologiyalarsiz tassovur qilib bo’lmaganidek
            SerenMebel sizga zamonoviy va yuqori aniqlikda ishlaydigan
            texnikalar va asboblardan foydalangan holda buyurtmangizni tayyorlab
            berishadi , zamonoviy texnikalar orqali biz aniq o’lchamdagi va
            sifatli bo’lgan mebel tayyorlash imkoniyatiga ega bolamiz . Bunda
            bizga Xitoy , Turkiya va Rassiya davlatlaridan olib kelingan texnika
            va asboblar yordam beradi.
          </p>
        </div>
        <div className="b_parts">
          <RiContractLine />
          <p>
            Buyurtmangiz ikki tomonlaman shartnoma asosida amalga oshiriladi .
            Bunda sizga shartnoma beriladi va bir nusxasi bizda qoladi. Bu
            shartnomada buyurtmangiz qanchada tayyor bolish vaqti , kelishilagan
            narx , sizning buyurtmangiz haqida ma’lumot va shunga o’xshash
            narsalar kiritilgan bo’ladi.
          </p>
        </div>
        <div className="b_parts">
          <MdOutlineHighQuality />
          <p>
            Mebellarimiz albatta sifatli materiallardan tayyorlanadi har bir
            detalga alohida e’tibor qaratiladi. Foydalaniladigan materiallarni
            siz tanlash imkoniyatiga ega bolasiz , bunda sizga material rangi ,
            qalinligi , ishlab chiqarilgan mamlakati haqida ma’lumot beriladi.
            Mdf , Dsp , Akril , L-mdf , L-dsp Mdf 1 yoki 2 taraflama
            laminatsiyalangan Turkiya , Xitoy , Rassiya davlatlarida ishlab
            chiqarilgan bo’yoqlar .
          </p>
        </div>
      </div>
    </div>
  );
}
