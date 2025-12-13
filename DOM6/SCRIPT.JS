const reels = [
  {
    username: "ananya_01",
    userprofileimg: "https://i.pravatar.cc/150?img=1",
    likecount: 1200,
    sharecount: 45,
    isliked: true,
    commentcount: 85,
    caption: "Morning vibes ✨",
    shareprofile: true,
    isfollowed: true,
    video: "./reels/1.mp4"
  },
  {
    username: "coder_life",
    userprofileimg: "https://i.pravatar.cc/150?img=2",
    likecount: 980,
    sharecount: 30,
    isliked: false,
    commentcount: 42,
    caption: "Debugging all day 💻",
    shareprofile: false,
    isfollowed: false,
    video: "./reels/2.mp4"
  },
  {
    username: "travel_diaries",
    userprofileimg: "https://i.pravatar.cc/150?img=3",
    likecount: 3420,
    sharecount: 120,
    isliked: true,
    commentcount: 210,
    caption: "Wander more 🌍",
    shareprofile: true,
    isfollowed: true,
    video: "./reels/3.mp4"
  },
  {
    username: "foodie_zone",
    userprofileimg: "https://i.pravatar.cc/150?img=4",
    likecount: 1560,
    sharecount: 68,
    isliked: false,
    commentcount: 96,
    caption: "Street food love ❤️",
    shareprofile: true,
    isfollowed: false,
    video: "./reels/4.mp4"
  },
  {
    username: "fitness_guru",
    userprofileimg: "https://i.pravatar.cc/150?img=5",
    likecount: 2210,
    sharecount: 95,
    isliked: true,
    commentcount: 134,
    caption: "No pain no gain 💪",
    shareprofile: false,
    isfollowed: true,
    video: "./reels/5.mp4"
  },
  {
    username: "music_addict",
    userprofileimg: "https://i.pravatar.cc/150?img=6",
    likecount: 1875,
    sharecount: 52,
    isliked: false,
    commentcount: 77,
    caption: "Feel the rhythm 🎶",
    shareprofile: true,
    isfollowed: false,
    video: "./reels/1.mp4"
  },
  {
    username: "artistic_soul",
    userprofileimg: "https://i.pravatar.cc/150?img=7",
    likecount: 2640,
    sharecount: 110,
    isliked: true,
    commentcount: 158,
    caption: "Art speaks louder 🎨",
    shareprofile: true,
    isfollowed: true,
    video: "./reels/2.mp4"
  },
  {
    username: "nature_clicks",
    userprofileimg: "https://i.pravatar.cc/150?img=8",
    likecount: 3090,
    sharecount: 140,
    isliked: true,
    commentcount: 201,
    caption: "Peace in nature 🌿",
    shareprofile: false,
    isfollowed: true,
    video: "./reels/3.mp4"
  },
  {
    username: "tech_updates",
    userprofileimg: "https://i.pravatar.cc/150?img=9",
    likecount: 890,
    sharecount: 25,
    isliked: false,
    commentcount: 33,
    caption: "Latest tech news 🚀",
    shareprofile: true,
    isfollowed: false,
    video: "./reels/4.mp4"
  },
  {
    username: "daily_quotes",
    userprofileimg: "https://i.pravatar.cc/150?img=10",
    likecount: 4100,
    sharecount: 220,
    isliked: true,
    commentcount: 320,
    caption: "Stay positive 🌟",
    shareprofile: true,
    isfollowed: true,
    video: "./reels/5.mp4"
  }
];

var sum='';
reels.forEach(function(elem){
    sum=sum+`
                <div class="reel">
                    <video autoplay loop muted src=${elem.video}></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofileimg}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isfollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isliked?'<i class="ri-heart-3-fill love"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likecount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentcount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.sharecount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                            
                        </div>
                    </div>
                </div>`;
})
var allreels=document.querySelector('.all-reels');
allreels.innerHTML=sum;