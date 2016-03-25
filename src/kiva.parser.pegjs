Start
    = String

String
    = Email

/************** email start *****************/
Email
    = '@S[email]'i _ lp:LocalPartLen _ "-"* _ dp:DomainPart? {
        return {
            dataType: 'string',
            type: 'email',
            localPartLen: lp,
            domainPart: dp
        }
    }

LocalPartLen
    = RandomNumber

DomainPart
    = dp:(RandomString "." RandomString) {
    	return dp.join('')
    }

/************** email end *****************/

/************** common start *****************/

RandomNumber
    = n:Number* {
        return parseInt(n.join(''));
    }

RandomString
    = l:Character* {
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

Character
	= [a-zA-Z0-9]

ws "Whitespace"
    = [ \t]

_ "Zero or more whitespaces"
    = ws*

__ "One or more whitespaces"
    = ws+

/************** common end *****************/