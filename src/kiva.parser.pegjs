Start
    = String

String
    = Email

/************** email start *****************/
Email
    = '@S[email]'i _ lp:LocalPartLen _ "-"* _ dp:DomainPartLen _ ds:DomainSuffix {
        return {
            dataType: 'string',
            type: 'email',
            localPartLen: lp,
            domainPartLen: dp,
            domainSuffix: ds
        }
    }

LocalPartLen
    = RandomNumber

DomainPartLen
    = RandomNumber

DomainSuffix
    = RandomString

/************** email end *****************/

/************** common start *****************/

RandomNumber
    = n:Number* {
        return parseInt(n.join(''));
    }

RandomString
    = l:Letter* {
        return l.join('');
    }

Word
    = l:Letter+ {
        return l.join('');
    }

Number
    = [0-9]

Letter
    = [a-zA-Z]

ws "Whitespace"
    = [ \t]

_ "Zero or more whitespaces"
    = ws*

__ "One or more whitespaces"
    = ws+

/************** common end *****************/