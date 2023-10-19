// Dark Mode changer 
function change() {
  const backgroundColor = MyBodyColor.style.backgroundColor;
  if (backgroundColor === 'black') {
    MyBodyColor.style.backgroundColor = 'var(--mainBgcolor)';
    // TopMarqueeNav.style.backgroundColor = 'var(--topNavBgColor)';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    TopNavBar.style.border = 'transparent';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    MarqueeWelcomeHome.style.color = 'darkblue';
    aboutBgMain.style.color = 'black';
    carouselExampleInterval.style.background = 'url(pic/enquiryBg.png)';
    carouselExampleInterval.style.border = '0px';
    TestimonialHead.style.color = 'White';
    FeaturesBackgroundColor1.style.backgroundColor = 'var(--mainBgcolor)';
    FeatureTextFirst.style.color = 'black';
    FeatureTextSecond.style.color = 'black';
    liveCards.style.backgroundColor = 'blue';
    liveCards.style.border = '0px';
    liveChildOne.style.backgroundColor = 'white';
    liveChildOne.style.color = 'black';
    liveChildTwo.style.backgroundColor = 'white';
    liveChildTwo.style.color = 'black';
    liveChildThree.style.backgroundColor = 'white';
    liveChildThree.style.color = 'black';
    liveChildFour.style.backgroundColor = 'white';
    liveChildFour.style.color = 'black';
    signUpNow.style.backgroundColor = 'orangered';
    signUpNow.style.color = 'white';
    Myform.style.backgroundColor = 'var(--aboutBgColor)';
    MyFooterColor.style.backgroundColor = 'var(--cardHeadColorDark)';
  }
  else {
    MyBodyColor.style.backgroundColor = 'black';
    // TopMarqueeNav.style.backgroundColor = 'black';
    TopNavBar.style.backgroundColor = 'black';
    TopNavBar.style.border = '1px solid white';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    MarqueeWelcomeHome.style.color = 'white';
    aboutBgMain.style.color = 'white';
    carouselExampleInterval.style.background = 'url(pic/testimonial.png)';
    carouselExampleInterval.style.border = '1px solid gray';
    TestimonialHead.style.color = 'red';
    FeaturesBackgroundColor1.style.backgroundColor = 'black';
    FeatureTextFirst.style.color = 'yellow';
    FeatureTextSecond.style.color = 'white';
    liveCards.style.backgroundColor = '#0c0c0c';
    liveCards.style.border = '1px solid gray';
    liveChildOne.style.backgroundColor = 'black';
    liveChildOne.style.color = 'yellow';
    liveChildTwo.style.backgroundColor = 'black';
    liveChildTwo.style.color = 'yellow';
    liveChildThree.style.backgroundColor = 'black';
    liveChildThree.style.color = 'yellow';
    liveChildFour.style.backgroundColor = 'black';
    liveChildFour.style.color = 'yellow';
    signUpNow.style.backgroundColor = 'gray';
    signUpNow.style.color = 'red';
    Myform.style.backgroundColor = 'var(--MyDarkGrayBg)';
    MyFooterColor.style.backgroundColor = 'black';
  }
}
function AdmChange() {
  const AdmbackgroundColor = AdmBodyColor.style.backgroundColor;
  if (AdmbackgroundColor === 'black') {
    admReg.style.backgroundColor = 'var(--admHeadColor)';
    admReg.style.color = 'maroon';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    TopNavBar.style.border = 'transparent';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    AdmBodyColor.style.backgroundColor = '#B2CBFF';
    MyRegFooterColor.style.backgroundColor = 'var(--cardHeadColorDark)';
    formText.style.color = 'maroon';
    RegHead.style.color = 'maroon';
    declarationBg.style.backgroundColor = ' rgb(240, 173, 78)';
    declarationTextOne.style.color = 'maroon';
    declarationTextTwo.style.color = 'maroon';
  }
  else {
    admReg.style.backgroundColor = 'var(--cardHeadColorDark)';
    admReg.style.color = 'white';
    TopNavBar.style.backgroundColor = 'black';
    TopNavBar.style.border = '1px solid white';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    AdmBodyColor.style.backgroundColor = 'black';
    MyRegFooterColor.style.backgroundColor = 'black';
    formText.style.color = 'wheat';
    RegHead.style.color = 'white';
    declarationBg.style.backgroundColor = 'var(--cardHeadColorDark)';
    declarationTextOne.style.color = 'white';
    declarationTextTwo.style.color = 'white';
  }
}
function aboutBgChanger() {
  const aboutBgColor = AboutBackground.style.backgroundColor;
  if (aboutBgColor === 'black') {
    AboutBackground.style.backgroundColor = '#E8EAED';
    aboutMain.style.backgroundColor = 'white';
    aboutMain.style.color = 'black';
    aboutMain.style.border = 'transparent';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    MissionLeft.style.backgroundColor = 'white';
    MissionLeft.style.border = 'transparent';
    MissionLeftChildA.style.backgroundColor = 'white';
    MissionLeftChildA.style.color = 'black';
    MissionLeftChildB.style.backgroundColor = 'white';
    MissionLeftChildB.style.color = 'black';
    MissionRight.style.backgroundColor = 'white';
    MissionRight.style.color = 'black';
    MissionRight.style.border = 'transparent';
    leftAccordionOne.style.backgroundColor = 'white';
    leftAccordionOne.style.color = 'black';
    leftAccordionTwo.style.backgroundColor = 'white';
    leftAccordionTwo.style.color = 'black';
    leftAccordionThree.style.backgroundColor = 'white';
    leftAccordionThree.style.color = 'black';
    leftAccordionFour.style.backgroundColor = 'white';
    leftAccordionFour.style.color = 'black';
    AboutFooter.style.backgroundColor = 'var(--cardHeadColorDark)';
    certificateOne.style.backgroundColor = 'white';
    certificateOne.style.color = 'black';
    certificateOne.style.border = '0';
    certificateTwo.style.backgroundColor = 'white';
    certificateTwo.style.color = 'black';
    certificateTwo.style.border = '0';
    certificateThree.style.backgroundColor = 'white';
    certificateThree.style.color = 'black';
    certificateThree.style.border = '0';
    certificateFour.style.backgroundColor = 'white';
    certificateFour.style.color = 'black';
    certificateFour.style.border = '0';
    BookCard.style.backgroundColor = 'white';
    BookCard.style.color = 'black';
    BookCard.style.border = '0';
    ComputerCard.style.backgroundColor = 'white';
    ComputerCard.style.color = 'black';
    ComputerCard.style.border = '0';
    Establishment.style.backgroundColor = 'white';
    Establishment.style.color = 'black';
    Establishment.style.border = '0';
    rightInfoParent.style.backgroundColor = 'white';
    rightInfoParent.style.border = '0';
    rightInfoParentFirstChild.style.color = 'black';
    rightInfoParentSecondChild.style.color = 'black';
    rightInfoParentThirdChild.style.color = 'black';
    rightInfoParentFourChild.style.color = 'black';
    rightInfoParentFiveChild.style.color = 'black';
    rightInfoParentSixChild.style.color = 'black';
  }
  else {
    AboutBackground.style.backgroundColor = 'black';
    aboutMain.style.backgroundColor = 'var(--MyDarkGrayBg)';
    aboutMain.style.color = 'white';
    aboutMain.style.border = '1px solid gray';
    TopNavBar.style.backgroundColor = 'black';
    MissionLeft.style.backgroundColor = 'var(--MyDarkGrayBg)';
    MissionLeft.style.border = '1px solid gray';
    MissionLeftChildA.style.backgroundColor = 'var(--MyDarkGrayBg)';
    MissionLeftChildA.style.color = 'white';
    MissionLeftChildB.style.backgroundColor = 'var(--MyDarkGrayBg)';
    MissionLeftChildB.style.color = 'white';
    MissionRight.style.backgroundColor = 'var(--MyDarkGrayBg)';
    MissionRight.style.color = 'white';
    MissionRight.style.border = '1px solid gray';
    leftAccordionOne.style.backgroundColor = 'var(--MyDarkGrayBg)';
    leftAccordionOne.style.color = 'white';
    leftAccordionTwo.style.backgroundColor = 'var(--MyDarkGrayBg)';
    leftAccordionTwo.style.color = 'white';
    leftAccordionThree.style.backgroundColor = 'var(--MyDarkGrayBg)';
    leftAccordionThree.style.color = 'white';
    leftAccordionFour.style.backgroundColor = 'var(--MyDarkGrayBg)';
    leftAccordionFour.style.color = 'white';
    AboutFooter.style.backgroundColor = 'black';
    certificateOne.style.backgroundColor = 'var(--MyDarkGrayBg)';
    certificateOne.style.color = 'white';
    certificateOne.style.border = '1px solid white';
    certificateTwo.style.backgroundColor = 'var(--MyDarkGrayBg)';
    certificateTwo.style.color = 'white';
    certificateTwo.style.border = '1px solid white';
    certificateThree.style.backgroundColor = 'var(--MyDarkGrayBg)';
    certificateThree.style.color = 'white';
    certificateThree.style.border = '1px solid white';
    certificateFour.style.backgroundColor = 'var(--MyDarkGrayBg)';
    certificateFour.style.color = 'white';
    certificateFour.style.border = '1px solid white';
    BookCard.style.backgroundColor = 'var(--MyDarkGrayBg)';
    BookCard.style.color = 'white';
    BookCard.style.border = '1px solid white';
    ComputerCard.style.backgroundColor = 'var(--MyDarkGrayBg)';
    ComputerCard.style.color = 'white';
    ComputerCard.style.border = '1px solid white';
    Establishment.style.backgroundColor = 'var(--MyDarkGrayBg)';
    Establishment.style.color = 'white';
    Establishment.style.border = '1px solid white';
    rightInfoParent.style.backgroundColor = 'var(--MyDarkGrayBg)';
    rightInfoParent.style.border = '1px solid gray';
    rightInfoParentFirstChild.style.color = 'white';
    rightInfoParentSecondChild.style.color = 'white';
    rightInfoParentThirdChild.style.color = 'white';
    rightInfoParentFourChild.style.color = 'white';
    rightInfoParentFiveChild.style.color = 'white';
    rightInfoParentSixChild.style.color = 'white';
  }
}
function BranchBgChanger() {
  const BranchColor = BranchBgColor.style.backgroundColor;
  if (BranchColor === 'black') {
    BranchBgColor.style.backgroundColor = '#ECECEC';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    BranchHeadSection.style.backgroundColor = 'white';
    BranchHeadSection.style.color = 'black';
    FeatureCard.style.backgroundColor = 'white';
    FeatureCard.style.color = 'black';
    FeatureCard.style.border = '0';
    NotificationsCard.style.backgroundColor = 'white';
    NotificationsCard.style.color = 'black';
    NotificationsCard.style.border = '0';
    rightFeatureFirst.style.backgroundColor = 'white';
    rightFeatureFirst.style.border = '0';
    BranchTypingText.style.color = 'black';
    infoOne.style.color = 'black';
    infoTwo.style.color = 'black';
    infoThree.style.color = 'black';
    infoFour.style.color = 'black';
    infoFive.style.color = 'black';
    infoSix.style.color = 'black';
    infoSeven.style.color = 'black';
    AboutFooterColor.style.backgroundColor = 'var(--cardHeadColorDark) ';
  } else {
    BranchBgColor.style.backgroundColor = 'black';
    TopNavBar.style.backgroundColor = 'black';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    BranchHeadSection.style.backgroundColor = 'var(--MyDarkGrayBg)';
    BranchHeadSection.style.color = 'white';
    FeatureCard.style.backgroundColor = 'var(--MyDarkGrayBg)';
    FeatureCard.style.color = 'white';
    FeatureCard.style.border = '1px solid white';
    NotificationsCard.style.backgroundColor = 'var(--MyDarkGrayBg)';
    NotificationsCard.style.color = 'white';
    NotificationsCard.style.border = '1px solid white';
    rightFeatureFirst.style.backgroundColor = 'var(--MyDarkGrayBg)';
    rightFeatureFirst.style.border = '1px solid white';
    BranchTypingText.style.color = 'red';
    infoOne.style.color = 'white';
    infoTwo.style.color = 'white';
    infoThree.style.color = 'white';
    infoFour.style.color = 'white';
    infoFive.style.color = 'white';
    infoSix.style.color = 'white';
    infoSeven.style.color = 'white';
    AboutFooterColor.style.backgroundColor = 'black';
  }
}
function DiplomaBgChanger() {
  const DiplomaColor = DiplomaBody.style.backgroundColor;
  if (DiplomaColor === 'black') {
    DiplomaBody.style.backgroundColor = 'var(--grayBgColor)';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    TopNavBar.style.border = 'transparent';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    mainDiplomaContainer.style.border = 'transparent';
    mainDiplomaContainer.style.backgroundColor = 'white';
    mainDiplomaContainer.style.color = 'black';
    mainContainer.style.backgroundColor = 'white';
    mainContainer.style.boxShadow = '2px 2px 8px #888888';
    mainContainer.style.border = 'transparent';
    DiplomaFooterColor.style.backgroundColor = 'var(--cardHeadColorDark)';
    TextOne.style.color = 'black';
    TextTwo.style.color = 'black';
    TextThree.style.color = 'black';
    TextFour.style.color = 'black';
    TextFive.style.color = 'black';
    TextSix.style.color = 'black';
    TextSeven.style.color = 'black';
    TextEight.style.color = 'black';
    TextNine.style.color = 'black';
    TextTen.style.color = 'black';
    TextEleven.style.color = 'black';
    TextTwelv.style.color = 'black';
    TextThirty.style.color = 'black';
    TextFrty.style.color = 'black';
    TextFifty.style.color = 'black';
    DbiTextOne.style.color = 'black';
    DbiTextTwo.style.color = 'black';
    DbiTextThree.style.color = 'black';
    DbiTextFour.style.color = 'black';
    DbiTextFive.style.color = 'black';
    DbiTextSix.style.color = 'black';
    DbiTextSeven.style.color = 'black';
    DbiTextEight.style.color = 'black';
    DbiTextNine.style.color = 'black';
    DbiTextTen.style.color = 'black';
    DbiTextEleven.style.color = 'black';
    DbiTextTwelv.style.color = 'black';
    DbiTextThirthy.style.color = 'black';
    DbiTextFourty.style.color = 'black';
    DbiTextFifty.style.color = 'black';
    DbiTextSixty.style.color = 'black';
    AdcaTextOne.style.color = 'black';
    AdcaTextTwo.style.color = 'black';
    AdcaTextThree.style.color = 'black';
    AdcaTextFour.style.color = 'black';
    AdcaTextFive.style.color = 'black';
    AdcaTextSix.style.color = 'black';
    AdcaTextSeven.style.color = 'black';
    AdcaTextEight.style.color = 'black';
    AdcaTextNine.style.color = 'black';
    AdcaTextTen.style.color = 'black';
    AdcaTextEleven.style.color = 'black';
    AdcaTextTwelv.style.color = 'black';
    AdcaTextThirthy.style.color = 'black';
    AdcaTextFourty.style.color = 'black';
    AdcaTextFifty.style.color = 'black';
    DwdTextOne.style.color = 'black';
    DwdTextTwo.style.color = 'black';
    DwdTextThree.style.color = 'black';
    DwdTextFour.style.color = 'black';
    DwdTextFive.style.color = 'black';
    DwdTextSix.style.color = 'black';
    DwdTextSeven.style.color = 'black';
    DcaTextOne.style.color = 'black';
    DcaTextTwo.style.color = 'black';
    DcaTextThree.style.color = 'black';
    DcaTextFour.style.color = 'black';
    DcaTextFive.style.color = 'black';
    DcaTextSix.style.color = 'black';
    DcaTextSeven.style.color = 'black';
    DcaTextEight.style.color = 'black';
    DcaTextNine.style.color = 'black';
    DcaTextTen.style.color = 'black';
    DcaTextEleven.style.color = 'black';
    DcaTextTwelv.style.color = 'black';
    DdtpTextOne.style.color = 'black';
    DdtpTextTwo.style.color = 'black';
    DdtpTextThree.style.color = 'black';
    DdtpTextFour.style.color = 'black';
    DdtpTextFive.style.color = 'black';
    DdtpTextSix.style.color = 'black';
    DdtpTextSeven.style.color = 'black';
    DdtpTextEight.style.color = 'black';
    ChnTextOne.style.color = 'black';
    ChnTextTwo.style.color = 'black';
    ChnTextThree.style.color = 'black';
    ChnTextFour.style.color = 'black';
    ChnTextFive.style.color = 'black';
    ChnTextSix.style.color = 'black';
    CacTextOne.style.color = 'black';
    CacTextTwo.style.color = 'black';
    CdtpTextOne.style.color = 'black';
    CdtpTextTwo.style.color = 'black';
    CdtpTextThree.style.color = 'black';
    CdtpTextFour.style.color = 'black';
    AditTextOne.style.color = 'black';
    AditTextTwo.style.color = 'black';
    AditTextThree.style.color = 'black';
    AditTextFour.style.color = 'black';
    AditTextFive.style.color = 'black';
    AditTextSix.style.color = 'black';
    AditTextSeven.style.color = 'black';
    AditTextEight.style.color = 'black';
    AditTextNine.style.color = 'black';
    AditTextTen.style.color = 'black';
    AditTextEleven.style.color = 'black';
    AditTextTwelv.style.color = 'black';
    AditTextThirty.style.color = 'black';
    AditTextFourty.style.color = 'black';
    CcaTextOne.style.color = 'black';
    CcaTextTwo.style.color = 'black';
    CcaTextThree.style.color = 'black';
    CcaTextFour.style.color = 'black';
    CcaTextFive.style.color = 'black';
    CcaTextSix.style.color = 'black';
    DitTextOne.style.color = 'black';
    DitTextTwo.style.color = 'black';
    DitTextThree.style.color = 'black';
    DitTextFour.style.color = 'black';
    DitTextFive.style.color = 'black';
    DitTextSix.style.color = 'black';
    DitTextSeven.style.color = 'black';
    DitTextEight.style.color = 'black';
    DitTextNine.style.color = 'black';
    DitTextTen.style.color = 'black';
    DcadTextOne.style.color = 'black';
    DcadTextTwo.style.color = 'black';
    DcadTextThree.style.color = 'black';
    DcadTextFour.style.color = 'black';
    DcadTextFive.style.color = 'black';
    DcadTextSix.style.color = 'black';
    DcadTextSeven.style.color = 'black';
    DcadTextEight.style.color = 'black';
    DcadTextNine.style.color = 'black';
    DcadTextTen.style.color = 'black';
    DcadTextEleven.style.color = 'black';
    DcadTextTwelv.style.color = 'black';
    DcadTextThirty.style.color = 'black';
    DcadTextFourty.style.color = 'black';
  }
  else {
    DiplomaBody.style.backgroundColor = 'black';
    TopNavBar.style.backgroundColor = 'black';
    TopNavBar.style.border = '1px solid gray';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    mainDiplomaContainer.style.backgroundColor = 'var(--MyDarkGrayBg)';
    mainDiplomaContainer.style.border = '1px solid gray';
    mainDiplomaContainer.style.color = 'white';
    mainContainer.style.backgroundColor = 'var(--MyDarkGrayBg)';
    mainContainer.style.boxShadow = '0 0 0';
    mainContainer.style.border = '1px solid gray';
    DiplomaFooterColor.style.backgroundColor = 'black'
    TextOne.style.color = 'white';
    TextTwo.style.color = 'white';
    TextThree.style.color = 'white';
    TextFour.style.color = 'white';
    TextFive.style.color = 'white';
    TextSix.style.color = 'white';
    TextSeven.style.color = 'white';
    TextEight.style.color = 'white';
    TextNine.style.color = 'white';
    TextTen.style.color = 'white';
    TextEleven.style.color = 'white';
    TextTwelv.style.color = 'white';
    TextThirty.style.color = 'white';
    TextFrty.style.color = 'white';
    TextFifty.style.color = 'white';
    DbiTextOne.style.color = 'white';
    DbiTextTwo.style.color = 'white';
    DbiTextThree.style.color = 'white';
    DbiTextFour.style.color = 'white';
    DbiTextFive.style.color = 'white';
    DbiTextSix.style.color = 'white';
    DbiTextSeven.style.color = 'white';
    DbiTextEight.style.color = 'white';
    DbiTextNine.style.color = 'white';
    DbiTextTen.style.color = 'white';
    DbiTextEleven.style.color = 'white';
    DbiTextTwelv.style.color = 'white';
    DbiTextThirthy.style.color = 'white';
    DbiTextFourty.style.color = 'white';
    DbiTextFifty.style.color = 'white';
    DbiTextSixty.style.color = 'white';
    AdcaTextOne.style.color = 'white';
    AdcaTextTwo.style.color = 'white';
    AdcaTextThree.style.color = 'white';
    AdcaTextFour.style.color = 'white';
    AdcaTextFive.style.color = 'white';
    AdcaTextSix.style.color = 'white';
    AdcaTextSeven.style.color = 'white';
    AdcaTextEight.style.color = 'white';
    AdcaTextNine.style.color = 'white';
    AdcaTextTen.style.color = 'white';
    AdcaTextEleven.style.color = 'white';
    AdcaTextTwelv.style.color = 'white';
    AdcaTextThirthy.style.color = 'white';
    AdcaTextFourty.style.color = 'white';
    AdcaTextFifty.style.color = 'white';
    DwdTextOne.style.color = 'white';
    DwdTextTwo.style.color = 'white';
    DwdTextThree.style.color = 'white';
    DwdTextFour.style.color = 'white';
    DwdTextFive.style.color = 'white';
    DwdTextSix.style.color = 'white';
    DwdTextSeven.style.color = 'white';
    DcaTextOne.style.color = 'white';
    DcaTextTwo.style.color = 'white';
    DcaTextThree.style.color = 'white';
    DcaTextFour.style.color = 'white';
    DcaTextFive.style.color = 'white';
    DcaTextSix.style.color = 'white';
    DcaTextSeven.style.color = 'white';
    DcaTextEight.style.color = 'white';
    DcaTextNine.style.color = 'white';
    DcaTextTen.style.color = 'white';
    DcaTextEleven.style.color = 'white';
    DcaTextTwelv.style.color = 'white';
    DdtpTextOne.style.color = 'white';
    DdtpTextTwo.style.color = 'white';
    DdtpTextThree.style.color = 'white';
    DdtpTextFour.style.color = 'white';
    DdtpTextFive.style.color = 'white';
    DdtpTextSix.style.color = 'white';
    DdtpTextSeven.style.color = 'white';
    DdtpTextEight.style.color = 'white';
    ChnTextOne.style.color = 'white';
    ChnTextTwo.style.color = 'white';
    ChnTextThree.style.color = 'white';
    ChnTextFour.style.color = 'white';
    ChnTextFive.style.color = 'white';
    ChnTextSix.style.color = 'white';
    CacTextOne.style.color = 'white';
    CacTextTwo.style.color = 'white';
    CdtpTextOne.style.color = 'white';
    CdtpTextTwo.style.color = 'white';
    CdtpTextThree.style.color = 'white';
    CdtpTextFour.style.color = 'white';
    AditTextOne.style.color = 'white';
    AditTextTwo.style.color = 'white';
    AditTextThree.style.color = 'white';
    AditTextFour.style.color = 'white';
    AditTextFive.style.color = 'white';
    AditTextSix.style.color = 'white';
    AditTextSeven.style.color = 'white';
    AditTextEight.style.color = 'white';
    AditTextNine.style.color = 'white';
    AditTextTen.style.color = 'white';
    AditTextEleven.style.color = 'white';
    AditTextTwelv.style.color = 'white';
    AditTextThirty.style.color = 'white';
    AditTextFourty.style.color = 'white';
    CcaTextOne.style.color = 'white';
    CcaTextTwo.style.color = 'white';
    CcaTextThree.style.color = 'white';
    CcaTextFour.style.color = 'white';
    CcaTextFive.style.color = 'white';
    CcaTextSix.style.color = 'white';
    DitTextOne.style.color = 'white';
    DitTextTwo.style.color = 'white';
    DitTextThree.style.color = 'white';
    DitTextFour.style.color = 'white';
    DitTextFive.style.color = 'white';
    DitTextSix.style.color = 'white';
    DitTextSeven.style.color = 'white';
    DitTextEight.style.color = 'white';
    DitTextNine.style.color = 'white';
    DitTextTen.style.color = 'white';
    DcadTextOne.style.color = 'white';
    DcadTextTwo.style.color = 'white';
    DcadTextThree.style.color = 'white';
    DcadTextFour.style.color = 'white';
    DcadTextFive.style.color = 'white';
    DcadTextSix.style.color = 'white';
    DcadTextSeven.style.color = 'white';
    DcadTextEight.style.color = 'white';
    DcadTextNine.style.color = 'white';
    DcadTextTen.style.color = 'white';
    DcadTextEleven.style.color = 'white';
    DcadTextTwelv.style.color = 'white';
    DcadTextThirty.style.color = 'white';
    DcadTextFourty.style.color = 'white';
    DcadTextFifty.style.color = 'white';
  }
}
function LanguageChanger() {
  const LanguageBg = LanguageBodyColor.style.backgroundColor;
  if (LanguageBg === 'black') {
    LanguageBodyColor.style.backgroundColor = '#ececec';
    LanguageContainer.style.backgroundColor = 'white';
    LanguageContainer.style.color = 'black';
    MainLanguageSection.style.backgroundColor = 'white';
    MainLanguageSection.style.border = 'transparent';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    myLanguageHeader.style.backgroundColor = 'white';
    myLanguageHeader.style.color = 'black';
    LanguageFooterBgColor.style.backgroundColor = 'var(--cardHeadColorDark)';
  }
  else {
    LanguageBodyColor.style.backgroundColor = 'black';
    LanguageContainer.style.backgroundColor = 'black';
    LanguageContainer.style.color = 'white';
    MainLanguageSection.style.backgroundColor = 'var(--MyDarkGrayBg)';
    MainLanguageSection.style.border = '1px solid white';
    TopNavBar.style.backgroundColor = 'black';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    myLanguageHeader.style.backgroundColor = 'var(--MyDarkGrayBg)';
    myLanguageHeader.style.color = 'white';
    LanguageFooterBgColor.style.backgroundColor = 'black';
  }
}
function graphicsBgChanger() {
  const GraphicsBg = TopNavBar.style.backgroundColor;
  if (GraphicsBg == 'black') {
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    MainGraphicsSection.style.backgroundColor = 'white';
    MainGraphicsSection.style.border = 'transparent';
    GraphicsMainBgColor.style.backgroundColor = 'var(--grayBgColor)';
    myGraphicsHeader.style.backgroundColor = 'white';
    myGraphicsHeader.style.color = 'black';
    myGraphicsHeader.style.border = 'transparent';
    graphicsBgColorFooter.style.backgroundColor = 'var(--cardHeadColorDark)';
  } else {
    TopNavBar.style.backgroundColor = 'black';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    MainGraphicsSection.style.backgroundColor = 'var(--MyDarkGrayBg)';
    MainGraphicsSection.style.border = '1px solid white';
    GraphicsMainBgColor.style.backgroundColor = 'black';
    myGraphicsHeader.style.backgroundColor = 'var(--MyDarkGrayBg)';
    myGraphicsHeader.style.color = 'white';
    myGraphicsHeader.style.border = '1px solid white';
    graphicsBgColorFooter.style.backgroundColor = 'black';
  }
}
function RepairingChanger() {
  const RepairBg = RepairingBody.style.backgroundColor;
  if (RepairBg === 'black') {
    RepairingBody.style.backgroundColor = '#ececec';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    TopNavBar.style.border = 'transparent';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    myLanguageHeader.style.backgroundColor = 'white';
    myLanguageHeader.style.color = 'black';
    MainRepairingContainer.style.backgroundColor = 'white';
    RepairingFooter.style.backgroundColor = 'var(--cardHeadColorDark)';
  }
  else {
    RepairingBody.style.backgroundColor = 'black';
    TopNavBar.style.backgroundColor = 'black';
    TopNavBar.style.border = '1px solid white';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    myLanguageHeader.style.backgroundColor = 'black';
    myLanguageHeader.style.color = 'white';
    MainRepairingContainer.style.backgroundColor = 'var(--MyDarkGrayBg)';
    RepairingFooter.style.backgroundColor = 'black';
  }
}
function resultBody() {
  const ResultBgColor = VerificationBody.style.backgroundColor;
  if (ResultBgColor === 'black') {
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    TopNavBar.style.border = 'transparent';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    VerificationBody.style.backgroundColor = '#ececec';
    verifyParentBg.style.backgroundColor = 'white';
    VerifyFooterColor.style.backgroundColor = 'var(--cardHeadColorDark)';
  }
  else {
    TopNavBar.style.backgroundColor = 'black';
    TopNavBar.style.border = '1px solid white';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    VerificationBody.style.backgroundColor = 'black';
    verifyParentBg.style.backgroundColor = 'var(--MyDarkGrayBg)';
    VerifyFooterColor.style.backgroundColor = 'black';
  }
}
function terms() {
  const TermsBg = TopNavBar.style.backgroundColor;
  if (TermsBg == 'black') {
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    termaHead.style.backgroundColor = 'white';
    termaHead.style.color = 'black';
    termBodyColor.style.backgroundColor = '#ececec'
    termBodyColor.style.color = '#000'
    TopNavBar.style.border = 'transparent';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    TermsFooterColor.style.backgroundColor = 'var(--cardHeadColorDark)';
  }
  else {
    TopNavBar.style.backgroundColor = 'black';
    termaHead.style.color = 'white';
    termaHead.style.backgroundColor = 'black';
    termBodyColor.style.backgroundColor = 'black';
    termBodyColor.style.color = 'white';
    TopNavBar.style.border = '1px solid white';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    TermsFooterColor.style.backgroundColor = 'black';
  }
}
function DoeaccCourse() {
  const DoeaccCourseBg = TopNavBar.style.backgroundColor;
  if (DoeaccCourseBg == 'black') {
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    DoeaccBodyColor.style.backgroundColor = 'var(--grayBgColor)';
    doeaccHead.style.backgroundColor = 'white';
    doeaccHead.style.color = 'black';
    AskQuestions.style.backgroundColor = 'white';
    AskQuestions.style.color = 'black';
    doeaccMarquee.style.backgroundColor = 'white';
    doeaccMarquee.style.color = 'black';
    DoeaccLeftCourse.style.backgroundColor = 'white';
    DoeaccLeftCourse.style.color = 'black';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    MainDoeaccBg.style.backgroundColor = 'white';
    TextOne.style.color = 'black';
    TextTwo.style.color = 'black';
    TextThree.style.color = 'black';
    TextFour.style.color = 'black';
    TextFive.style.color = 'black';
    TextSix.style.color = 'black';
    TextSeven.style.color = 'black';
    TextEight.style.color = 'black';
    TextNine.style.color = 'black';
    TextTen.style.color = 'black';
    TextEleven.style.color = 'black';
    TextTwelv.style.color = 'black';
    TextCaptionOne.style.color = 'black';
    MainOLvlBg.style.backgroundColor = 'white';
    OLvlTextOne.style.color = 'black';
    OLvlTextTwo.style.color = 'black';
    OLvlTextThree.style.color = 'black';
    OLvlTextFour.style.color = 'black';
    OLvlTextFive.style.color = 'black';
    OLvlTextSix.style.color = 'black';
    TextCaptionTwo.style.color = 'black';
    GovFooterColor.style.backgroundColor = 'var(--cardHeadColorDark)';
    GovFooterColor.style.border = 'transparent';
  }
  else {
    TopNavBar.style.backgroundColor = 'black';
    DoeaccBodyColor.style.backgroundColor = 'black';
    doeaccHead.style.color = 'white';
    doeaccHead.style.backgroundColor = 'var(--MyDarkGrayBg)';
    AskQuestions.style.color = 'white';
    AskQuestions.style.backgroundColor = 'var(--MyDarkGrayBg)';
    doeaccMarquee.style.color = 'white';
    doeaccMarquee.style.backgroundColor = 'var(--MyDarkGrayBg)';
    DoeaccLeftCourse.style.backgroundColor = 'var(--MyDarkGrayBg)';
    DoeaccLeftCourse.style.color = 'white';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    MainDoeaccBg.style.backgroundColor = 'black';
    TextOne.style.color = 'white';
    TextTwo.style.color = 'white';
    TextThree.style.color = 'white';
    TextFour.style.color = 'white';
    TextFive.style.color = 'white';
    TextSix.style.color = 'white';
    TextSeven.style.color = 'white';
    TextEight.style.color = 'white';
    TextNine.style.color = 'white';
    TextTen.style.color = 'white';
    TextEleven.style.color = 'white';
    TextTwelv.style.color = 'white';
    TextCaptionOne.style.color = 'white';
    MainOLvlBg.style.backgroundColor = 'black';
    OLvlTextOne.style.color = 'white';
    OLvlTextTwo.style.color = 'white';
    OLvlTextThree.style.color = 'white';
    OLvlTextFour.style.color = 'white';
    OLvlTextFive.style.color = 'white';
    OLvlTextSix.style.color = 'white';
    TextCaptionTwo.style.color = 'white';
    GovFooterColor.style.backgroundColor = 'black';
    GovFooterColor.style.border = '1px solid white';
  }
}
function WebChanger() {
  const WebCourseBg = TopNavBar.style.backgroundColor;
  if (WebCourseBg == 'black') {
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    DoeaccBodyColor.style.backgroundColor = 'var(--grayBgColor)';
    doeaccHead.style.backgroundColor = 'white';
    doeaccHead.style.color = 'black';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    AskQuestions.style.backgroundColor = 'white';
    AskQuestions.style.color = 'black';
    WebMarquee.style.backgroundColor = 'white';
    WebMarquee.style.color = 'black';
    WebLeftCourse.style.backgroundColor = 'white';
    WebLeftCourse.style.color = 'black';
    MainWebBg.style.backgroundColor = 'white';
    WebTextOne.style.color = 'black';
    WebTextTwo.style.color = 'black';
    WebTextThree.style.color = 'black';
    WebTextFour.style.color = 'black';
    WebTextFive.style.color = 'black';
    WebTextSix.style.color = 'black';
    WebTextSeven.style.color = 'black';
    WebTextEight.style.color = 'black';
    WebTextNine.style.color = 'black';
    WebTextTen.style.color = 'black';
    WebTextEleven.style.color = 'black';
    WebTextTwelv.style.color = 'black';
    WebTextTherteen.style.color = 'black';
    WebTextFourteen.style.color = 'black';
    WebTextFifteen.style.color = 'black';
    WebTextSixteen.style.color = 'black';
    WebTextSeventeen.style.color = 'black';
    WebTextEighteen.style.color = 'black';
    WebTextNinteen.style.color = 'black';
    WebTextTwentyOne.style.color = 'black';
    WebTextTwentyTwo.style.color = 'black';
    WebTextTwentyThree.style.color = 'black';
    WebTextTwentyFour.style.color = 'black';
    WebTextTwentyFive.style.color = 'black';
    WebTextTwentySix.style.color = 'black';
    WebTextTwentySeven.style.color = 'black';
    WebTextTwentyEight.style.color = 'black';
    WebTextTwentyNine.style.color = 'black';
    WebTextTherthy.style.color = 'black';
    PsTextOne.style.color = 'black';
    PsTextTwo.style.color = 'black';
    PsTextThree.style.color = 'black';
    PsTextFour.style.color = 'black';
    PsTextFive.style.color = 'black';
    PsTextSix.style.color = 'black';
    PsTextSeven.style.color = 'black';
    PsTextEight.style.color = 'black';
    TextCaptionTwo.style.color = 'black';
    MainDwdBg.style.backgroundColor = 'white';
    DwdTextOne.style.color = 'black';
    DwdTextTwo.style.color = 'black';
    DwdTextThree.style.color = 'black';
    DwdTextFour.style.color = 'black';
    DwdTextFive.style.color = 'black';
    DwdTextSix.style.color = 'black';
    DwdTextSeven.style.color = 'black';
    DwdTextEight.style.color = 'black';
    DwdTextNine.style.color = 'black';
    DwdTextTen.style.color = 'black';
    DwdTextEleven.style.color = 'black';
    DwdTextTwelv.style.color = 'black';
    DwdTextTherteen.style.color = 'black';
    DwdTextFourteen.style.color = 'black';
    DwdTextFifteen.style.color = 'black';
    DwdTextSixteen.style.color = 'black';
    DwdTextSeventeen.style.color = 'black';
    DwdTextEighteen.style.color = 'black';
    DwdTextNineteen.style.color = 'black';
    DwdTextTwenty.style.color = 'black';
    DcadTextTwentyOne.style.color = 'black';
    DwdTextTwentyTwo.style.color = 'black';
    DwdTextTwentyThree.style.color = 'black';
    CssTextOne.style.color = 'black';
    CssTextTwo.style.color = 'black';
    CssTextThree.style.color = 'black';
    CssTextFour.style.color = 'black';
    CssTextFive.style.color = 'black';
    CssTextSix.style.color = 'black';
    CssTextSeven.style.color = 'black';
    CssTextEight.style.color = 'black';
    CssTextNine.style.color = 'black';
    CssTextTen.style.color = 'black';
    CssTextEleven.style.color = 'black';
    CssTextTwelv.style.color = 'black';
    CssTextTherteen.style.color = 'black';
    CssTextFourteen.style.color = 'black';
    JsTextOne.style.color = 'black';
    JsTextTwo.style.color = 'black';
    JsTextThree.style.color = 'black';
    JsTextFour.style.color = 'black';
    JsTextFive.style.color = 'black';
    JsTextSix.style.color = 'black';
    JsTextSeven.style.color = 'black';
    JsTextEight.style.color = 'black';
    JsTextNine.style.color = 'black';
    JsTextTen.style.color = 'black';
    JsTextEleven.style.color = 'black';
    JsTextTwelv.style.color = 'black';
    JsTextTherteen.style.color = 'black';
    JsTextFourteen.style.color = 'black';
    PhsTextOne.style.color = 'black';
    PhsTextTwo.style.color = 'black';
    PhsTextThree.style.color = 'black';
    PhsTextFour.style.color = 'black';
    PhsTextFive.style.color = 'black';
    PhsTextSix.style.color = 'black';
    PhsTextSeven.style.color = 'black';
    PhsTextEight.style.color = 'black';
    TextCaptionTwoDwd.style.color = 'black';
    WebFooterColor.style.backgroundColor = 'var(--cardHeadColorDark)';
    WebFooterColor.style.border = 'transparent';
  }
  else {
    TopNavBar.style.backgroundColor = 'black';
    DoeaccBodyColor.style.backgroundColor = 'black';
    doeaccHead.style.color = 'white';
    doeaccHead.style.backgroundColor = 'var(--MyDarkGrayBg)';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    AskQuestions.style.color = 'white';
    AskQuestions.style.backgroundColor = 'var(--MyDarkGrayBg)';
    WebMarquee.style.color = 'white';
    WebMarquee.style.backgroundColor = 'var(--MyDarkGrayBg)';
    WebLeftCourse.style.backgroundColor = 'var(--MyDarkGrayBg)';
    WebLeftCourse.style.color = 'white';
    MainWebBg.style.backgroundColor = 'var(--MyDarkGrayBg)';
    WebTextOne.style.color = 'white';
    WebTextTwo.style.color = 'white';
    WebTextThree.style.color = 'white';
    WebTextFour.style.color = 'white';
    WebTextFive.style.color = 'white';
    WebTextSix.style.color = 'white';
    WebTextSeven.style.color = 'white';
    WebTextEight.style.color = 'white';
    WebTextNine.style.color = 'white';
    WebTextTen.style.color = 'white';
    WebTextEleven.style.color = 'white';
    WebTextTwelv.style.color = 'white';
    WebTextTherteen.style.color = 'white';
    WebTextFourteen.style.color = 'white';
    WebTextFifteen.style.color = 'white';
    WebTextSixteen.style.color = 'white';
    WebTextSeventeen.style.color = 'white';
    WebTextEighteen.style.color = 'white';
    WebTextNinteen.style.color = 'white';
    WebTextTwentyOne.style.color = 'white';
    WebTextTwentyTwo.style.color = 'white';
    WebTextTwentyThree.style.color = 'white';
    WebTextTwentyFour.style.color = 'white';
    WebTextTwentyFive.style.color = 'white';
    WebTextTwentySix.style.color = 'white';
    WebTextTwentySeven.style.color = 'white';
    WebTextTwentyEight.style.color = 'white';
    WebTextTwentyNine.style.color = 'white';
    WebTextTherthy.style.color = 'white';
    PsTextOne.style.color = 'white';
    PsTextTwo.style.color = 'white';
    PsTextThree.style.color = 'white';
    PsTextFour.style.color = 'white';
    PsTextFive.style.color = 'white';
    PsTextSix.style.color = 'white';
    PsTextSeven.style.color = 'white';
    PsTextEight.style.color = 'white';
    TextCaptionTwo.style.color = 'white';
    MainDwdBg.style.backgroundColor = 'var(--MyDarkGrayBg)';
    DwdTextOne.style.color = 'white';
    DwdTextTwo.style.color = 'white';
    DwdTextThree.style.color = 'white';
    DwdTextFour.style.color = 'white';
    DwdTextFive.style.color = 'white';
    DwdTextSix.style.color = 'white';
    DwdTextSeven.style.color = 'white';
    DwdTextEight.style.color = 'white';
    DwdTextNine.style.color = 'white';
    DwdTextTen.style.color = 'white';
    DwdTextEleven.style.color = 'white';
    DwdTextTwelv.style.color = 'white';
    DwdTextTherteen.style.color = 'white';
    DwdTextFourteen.style.color = 'white';
    DwdTextFifteen.style.color = 'white';
    DwdTextSixteen.style.color = 'white';
    DwdTextSeventeen.style.color = 'white';
    DwdTextEighteen.style.color = 'white';
    DwdTextNineteen.style.color = 'white';
    DwdTextTwenty.style.color = 'white';
    DcadTextTwentyOne.style.color = 'white';
    DwdTextTwentyTwo.style.color = 'white';
    DwdTextTwentyThree.style.color = 'white';
    CssTextOne.style.color = 'white';
    CssTextTwo.style.color = 'white';
    CssTextThree.style.color = 'white';
    CssTextFour.style.color = 'white';
    CssTextFive.style.color = 'white';
    CssTextSix.style.color = 'white';
    CssTextSeven.style.color = 'white';
    CssTextEight.style.color = 'white';
    CssTextNine.style.color = 'white';
    CssTextTen.style.color = 'white';
    CssTextEleven.style.color = 'white';
    CssTextTwelv.style.color = 'white';
    CssTextTherteen.style.color = 'white';
    CssTextFourteen.style.color = 'white';
    JsTextOne.style.color = 'white';
    JsTextTwo.style.color = 'white';
    JsTextThree.style.color = 'white';
    JsTextFour.style.color = 'white';
    JsTextFive.style.color = 'white';
    JsTextSix.style.color = 'white';
    JsTextSeven.style.color = 'white';
    JsTextEight.style.color = 'white';
    JsTextNine.style.color = 'white';
    JsTextTen.style.color = 'white';
    JsTextEleven.style.color = 'white';
    JsTextTwelv.style.color = 'white';
    JsTextTherteen.style.color = 'white';
    JsTextFourteen.style.color = 'white';
    PhsTextOne.style.color = 'white';
    PhsTextTwo.style.color = 'white';
    PhsTextThree.style.color = 'white';
    PhsTextFour.style.color = 'white';
    PhsTextFive.style.color = 'white';
    PhsTextSix.style.color = 'white';
    PhsTextSeven.style.color = 'white';
    PhsTextEight.style.color = 'white';
    TextCaptionTwoDwd.style.color = 'white';
    WebFooterColor.style.backgroundColor = 'black'
    WebFooterColor.style.border = '1px solid white';
  }
}
function ContactChanger() {
  const ContactBgColor = MainContactBgColor.style.backgroundColor;
  if (ContactBgColor === 'black') {
    MainContactBgColor.style.backgroundColor = '#ececec';
    TopNavBar.style.backgroundColor = 'var(--darkRed)';
    TopNavBar.style.border = 'transparent';
    CourseListNav.style.backgroundColor = 'var(--darkRed)';
    studentZoneNav.style.backgroundColor = 'var(--darkRed)';
    ContactHeader.style.background = 'url(pic/enquiryBg.png)';
    ContactFooterColor.style.background = 'var(--cardHeadColorDark)';
    ContactFooterColor.style.border = 'transparent';
  }
  else {
    MainContactBgColor.style.backgroundColor = 'black';
    TopNavBar.style.backgroundColor = 'black';
    TopNavBar.style.border = '1px solid white';
    CourseListNav.style.backgroundColor = 'black';
    studentZoneNav.style.backgroundColor = 'black';
    ContactHeader.style.background = 'var(--cardHeadColorDark)';
    ContactFooterColor.style.background = 'black';
    ContactFooterColor.style.border = '1px solid white';
  }
}












// Swiper Js
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// Back to top 
// ......Scroll Button......
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function listen() {
  var Voice = document.getElementById('TextToSpeech').value;
  responsiveVoice.speak(Voice);
}
// PrinTable Data
function printData() {
  var body = document.getElementById('VerificationBody').innerHTML;
  var PrintResult = document.getElementById('PrintResult').innerHTML;
  document.getElementById('VerificationBody').innerHTML = PrintResult;
  window.print()
  document.getElementById('VerificationBody').innerHTML = body;
  html2pdf()
    .from(PrintResult)
  // .save()
}
// Sava as PDF Data
function DownloadData() {
  var PrintResult = document.getElementById('PrintResult').innerHTML;
  document.getElementById('VerificationBody').innerHTML = PrintResult;
  html2pdf()
    .from(PrintResult)
    .save()
}
// Admission form && Contact form
function OnlyLetters(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
function contact(input) {
  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}
// SubmitEvent btn 
function checkMark() {
  if (checkBtn.disabled) {
    document.getElementById("checkBtn").disabled = false;
  } else {
    document.getElementById("checkBtn").disabled = true;
  }
}
//     responsiveVoice.setDefaultVoice("Hindi Female");
// responsiveVoice.speak(document.getElementById('text').value);
