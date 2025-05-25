interface MajorCredits{
    credits: number;
    readonly _brand: "Major Credits";

};

interface MinorCredits{
    credits: number;
    readonly _brand: "Minor Credits";
};

function sumMajorCredits(subject1:MajorCredits, subject2:MajorCredits){
    return {
        totalcredits: subject1.credits + subject2.credits
    }
}
function sumMinorCredits(subject1:MinorCredits, subject2:MinorCredits){
    return {
        totalcredits: subject1.credits + subject2.credits
    }
}